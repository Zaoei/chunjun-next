import { TypographyStylesProvider } from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core'
import 'highlight.js/styles/atom-one-dark.css'
type Props = {
  content: string
}

const PostBody = (props: Props) => {
  const { content } = props
  const { colorScheme } = useMantineColorScheme()

  return (
    <TypographyStylesProvider className="md:col-span-3 p-4 overflow-hidden">
      <article
        className={`article ${colorScheme}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </TypographyStylesProvider>
  )
}

export default PostBody
