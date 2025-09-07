/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CrisPoe Registry',
    description: 'The official store for CrisPoe Custom workspaces.',
    icon: 'https://raw.githubusercontent.com/cristianpoe/crispoe-registry/refs/heads/1.1/CrisPoe_Registry.png',
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
