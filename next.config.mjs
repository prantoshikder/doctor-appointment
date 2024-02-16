// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "/",
      "http://",
      "flagcdn.com",
      "upload.wikimedia.org",
      // "website link",
    ],
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
  distDir: ".next",
};

// module.exports = withPlaiceholder(nextConfig);
export default withPlaiceholder(nextConfig);
