/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});
