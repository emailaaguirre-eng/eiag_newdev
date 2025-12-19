/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'http://localhost:8080',
  },
}

module.exports = nextConfig

