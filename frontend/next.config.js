/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "127.0.0.1",
      "http://127.0.0.1:8000/media/images/",
    ],
  },
};

module.exports = nextConfig;
