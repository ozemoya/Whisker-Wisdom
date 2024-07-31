import withPlugins from 'next-compose-plugins';
import withTM from 'next-transpile-modules';

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['daisyui']);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  // other configurations...
};

export default withPlugins([withTM], nextConfig);