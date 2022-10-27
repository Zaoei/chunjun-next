import {
  Header,
  ActionIcon,
  ColorScheme,
  Text,
  Burger,
  SegmentedControl,
  Menu
} from '@mantine/core'
import { Sun, Moon, ChevronDown } from 'tabler-icons-react'
import Image from 'next/image'
import { getLocaleLinkPath, headerLinks } from '@/config/headerLinks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

type Props = {
  theme: ColorScheme
  changeTheme: () => void
  opened: boolean
  changeOpened: () => void
}

const AppHeader = (props: Props) => {
  const { theme, changeTheme, opened, changeOpened } = props
  const router = useRouter()
  const { locale, locales } = router
  const t = useTranslations('Header')

  const languages = locales?.map((value) => {
    return {
      value: value,
      label: value === 'zh-Hans' ? '简体中文' : 'English'
    }
  })

  const changeLanguage = (language: string) => {
    const { pathname, asPath, query } = router
    let nextPath = asPath;
    // const path = getLocaleLinkPath(asPath, language)
    if (language === 'zh-Hans' && query.slug === 'Quick Start') {
      nextPath = '/documents/快速开始'
    } else if (language === 'en' && query.slug === '快速开始') {
      nextPath = '/documents/Quick Start'
    }
    router.push({ pathname, query }, nextPath, { locale: language })
  }
  return (
    <Header
      height={64}
      className="flex items-center justify-between sticky shadow-md bg--gray-50 2xl:px-[22vw]"
    >
      <Burger
        opened={opened}
        onClick={changeOpened}
        className="md:hidden inline-block"
      />
      <div className="h-full flex items-center flex-1 cursor-pointer">
        <div
          className="flex h-full items-center md:justify-start justify-center md:w-auto w-full"
          onClick={() => router.push('/')}
        >
          <Image
            priority
            src="/logo-dark.svg"
            height={48}
            width={48}
            alt="logo of chunjun"
          />
          <Text className="text-xl capitalize flex items-center font-nunito select-none">
            Chunjun
          </Text>
        </div>
        <div className="h-full justify-center flex-1 md:flex hidden items-center">
          {headerLinks.map((link) => {
            if (link.path[0] === '/' && !Array.isArray(link.path)) {
              return (
                <Link href={getLocaleLinkPath(link.key, link.path)} key={link.key}>
                  <a className="font-nunito inline-block md:px-5 text-center">
                    {t(link.key)}
                  </a>
                </Link>
              )
            } else if (Array.isArray(link.path)) {
              return (
                <Menu
                  shadow="md"
                  width={120}
                  trigger="hover"
                  openDelay={100}
                  closeDelay={200}
                  key={link.key}
                  position="bottom"
                >
                  <Menu.Target>
                    <span className="flex items-center md:px-5 justify-center text-center">
                      {t(link.key)}
                      <ChevronDown size={16} className="ml-1" />
                    </span>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {link.path.map((url) => {
                      return (
                        <Menu.Item key={url.key}>
                          <Link href={url.path as string}>
                            <a className="uppercase">{t(url.key)}{t('example')}</a>
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Dropdown>
                </Menu>
              )
            } else {
              return (
                <a
                  href={getLocaleLinkPath(link.key, link.path)}
                  key={link.key}
                  className="font-raleway inline-block md:px-5 text-center"
                  target="blank"
                >
                  {t(link.key)}
                </a>
              )
            }
          })}
        </div>
      </div>

      <div className="h-full flex items-center space-x-4 pr-[9px]">
        <SegmentedControl
          value={locale}
          onChange={changeLanguage}
          data={languages || []}
        />
        <ActionIcon
          variant="outline"
          color={theme === 'dark' ? 'yellow' : 'blue'}
          onClick={changeTheme}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </ActionIcon>
      </div>
    </Header>
  )
}

export default AppHeader
