/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "design-embraced.nyc3.digitaloceanspaces.com",
      },
      {
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

module.exports = nextConfig;
const { withNextVideo } = require("next-video/process");

module.exports = withNextVideo(nextConfig);
