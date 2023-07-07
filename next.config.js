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
  }
};

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  nextConfig.images = {
    loader: 'imgix',
    domains: ['github.com'],
    basePath: '/chunjun-next',
    path: 'https://zaoei.github.io/chunjun-next'
  };
  nextConfig.basePath = '/chunjun-next';
} else {
  nextConfig.experimental = {
    images: {
      unoptimized: true
    }
  };
}

module.exports = nextConfig;
