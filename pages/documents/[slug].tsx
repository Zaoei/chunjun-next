import PostBody from '@/components/PostBody'
import { markdownToHtml } from '@/utils/markdown2html'
import { getAllPosts, getPostBySlug, getAllPaths, ROOT_EN, ROOT_ZH, LocaleType } from '@/api/post-api'
import { Skeleton } from '@mantine/core'
import { useRouter } from 'next/router'
import DocumentLike from '@/common/document-like'
import FileTree from '@/types/FileTree'
import Toc from '@/types/Toc'
import Params from '@/types/Params'
import { generateTree } from '@/utils/generateTree'
import { GetStaticPropsContext } from 'next'

const SEP = process.env.sep as string

const Post = ({
  content,
  tree,
  toc
}: {
  content: string
  tree: FileTree[]
  toc: Toc[]
}) => {
  const router = useRouter()
  return (
    <>
      <DocumentLike tree={tree} target="/documents" toc={toc}>
        {router.isFallback ? (
          <Skeleton visible className="md:col-span-4" />
        ) : (
          <PostBody content={content} />
        )}
      </DocumentLike>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  const postsEN = getAllPosts(['slug'], 'en');

  const paths = posts.map((posts) => {
    return {
      params: {
        slug: posts.slug.split('/').join(SEP),
      }
    }
  })

  const pathsEn = postsEN.map((posts) => {
    return {
      params: {
        slug: posts.slug.split('/').join(SEP),
        locale: 'en'
      }
    }
  });

  return {
    paths: paths.concat(pathsEn),
    fallback: true
  }
}

export async function getStaticProps({ params, locale }: Params & GetStaticPropsContext) {
  console.log('getStaticProps', params, locale)
  const rootPath = locale === 'en' ? ROOT_EN : ROOT_ZH;
  const post = getPostBySlug(params.slug, ['slug', 'content'], locale as LocaleType)
  const { content, toc } = await markdownToHtml(post.content || '')
  
  const allPaths = getAllPaths(rootPath)
  const tree = generateTree(allPaths)

  console.log('tree:', tree)

  return {
    props: {
      content,
      tree,
      toc,
      messages: (await import(`../../i18n/${locale}.json`)).default
    }
  }
}
