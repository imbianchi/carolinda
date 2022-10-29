/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    MAIL_SENDER: process.env.MAIL_SENDER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_RECIPIENT: process.env.MAIL_RECIPIENT,
    MAIL_SERVICE: process.env.MAIL_SERVICE,
  }
}

module.exports = nextConfig
