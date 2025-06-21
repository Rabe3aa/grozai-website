/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  // Optional: Add other Next.js configurations here if needed
  // For example, if you plan to use images from external domains:
  // images: {
  //   domains: ['example.com'],
  // },
}

module.exports = nextConfig
