/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * In development, disable Webpack’s persistent filesystem cache.
   * Prevents intermittent `Cannot find module './<n>.js'` (stale chunk graph vs `.next`
   * on disk), especially on Windows when the dev server is restarted or files change quickly.
   * Production `next build` keeps default caching (dev === false).
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [
      { source: "/explore", destination: "/pods", permanent: true },
      { source: "/explore.html", destination: "/pods", permanent: true },
      { source: "/pods.html", destination: "/pods", permanent: true },
      {
        source: "/pods/choose-map-experimental",
        destination: "/pods",
        permanent: true,
      },
      { source: "/my-journey.html", destination: "/my-journey", permanent: true },
      { source: "/mi-viaje.html", destination: "/my-journey", permanent: true },
      {
        source: "/experiences/experiences.html",
        destination: "/experiences",
        permanent: true,
      },
      { source: "/home/index.html", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
