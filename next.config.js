/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['cdn2.thecatapi.com'],
  },
  basePath: '/Whisker-Wisdom',
  assetPrefix: '/Whisker-Wisdom/',
  trailingSlash: true,
};

module.exports = nextConfig;