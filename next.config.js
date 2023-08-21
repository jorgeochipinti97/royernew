/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
