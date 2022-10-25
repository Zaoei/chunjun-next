import '@/styles/globals.css'
import '@/styles/font.css'
import 'aos/dist/aos.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core'
import { useState } from 'react'
import { NextIntlProvider, useTranslations } from 'next-intl';
import AppHeader from '@/components/AppHeader'
import AppNavbar from '@/components/AppNavbar'

function MyHead() {
  const t = useTranslations('Home')

  return(
    <Head>
      <title>{t('title')}</title>
      <meta name="description" content="纯钧Chunjun" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const [opened, setOpened] = useState<boolean>(false)
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  const toggleNavbar = () => {
    setOpened((o) => !o)
  }
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <MyHead />
          <AppShell
            padding={'md'}
            header={
              <AppHeader
                opened={opened}
                changeOpened={toggleNavbar}
                changeTheme={toggleColorScheme}
                theme={colorScheme}
              />
            }
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[4]
                    : theme.colors.white,
                padding: 0
              }
            })}
          >
            <Component {...pageProps} />
            <AppNavbar opened={opened} changeOpened={toggleNavbar} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </NextIntlProvider>
  )
}

export default MyApp
