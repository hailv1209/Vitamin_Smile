/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lvh-eat-clean.s3.amazonaws.com',
      },
    ]
  }
}

module.exports = nextConfig
