/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image-upload.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-upload.app',
      },
    ],
  },
}

module.exports = nextConfig
