/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com", "btrax.com"],
  },
};

module.exports = nextConfig;
