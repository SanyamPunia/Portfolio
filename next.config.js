const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "media.graphassets.com"],
  },

  async redirects() {
    return [buildRedirect("/resume", "/share/sanyam_cv.pdf")];
  },
};

module.exports = nextConfig;
