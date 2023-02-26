/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ["cdn.sanity.io", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
