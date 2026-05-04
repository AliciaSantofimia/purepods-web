/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
