/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com", "lh3.googleusercontent.com"],
  },
  /* webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: "asset/source",
    });

    return config;
  }, */
};

module.exports = nextConfig;
