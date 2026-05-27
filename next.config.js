/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * Dev-only: keep compiled route modules in memory longer so Webpack is less likely
   * to evict/replace server chunks while the runtime still references old numeric chunk ids
   * (relevant on Windows under rapid saves / multiple watchers).
   */
  onDemandEntries: {
    maxInactiveAge: 5 * 60 * 1000,
    pagesBufferLength: 24,
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
      {
        source: "/experiences/night-falls",
        destination: "/experiences/stargazing",
        permanent: true,
      },
      {
        source: "/experiences/night-falls/",
        destination: "/experiences/stargazing",
        permanent: true,
      },
      {
        source: "/location/kokomea-purepod-luxury-glass-cabin-near-wellington",
        destination: "/location/kokomea",
        permanent: true,
      },
      {
        source: "/location/kokomea-purepod-luxury-glass-cabin-near-wellington/",
        destination: "/location/kokomea",
        permanent: true,
      },
      { source: "/home/index.html", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
