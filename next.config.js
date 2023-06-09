/** @type {import('next').NextConfig} */

const withSvg = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withSvg(nextConfig);
