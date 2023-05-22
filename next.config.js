/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "lh3.googleusercontent.com"],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};

module.exports = nextConfig;
