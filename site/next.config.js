/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CrisPoe Registry',
    description: 'The official store for CrisPoe Custom workspaces.',
    icon: 'https://github.com/cristianpoe/crispoe-registry/blob/c7addece34e24aefbf8935a3fbcdf573a64d509c/CrisPoe_Registry.png',
    listUrl: 'https://cristianpoe.github.io/crispoe-registry/',
    contactUrl: 'https://github.com/cristianpoe/crispoe-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/crispoe-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
