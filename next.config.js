/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    sep: '@',
    root_en: '/docs_en',
    root_zh: '/docs_zh',
    sql: '/chunjun-examples/sql',
    json: '/chunjun-examples/json'
  },
  i18n: {
    locales: ['zh-Hans', 'en'],
    defaultLocale: 'zh-Hans',
  }
}

module.exports = nextConfig
