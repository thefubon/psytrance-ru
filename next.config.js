/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.psytrance.ru",
      },
      {
        protocol: "https",
        hostname: "**.gravatar.com",
      },
    ],
  },
};

module.exports = nextConfig;
