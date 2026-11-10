import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages: emit a fully static site into ./out
  // (the deploy workflow uploads ./out as the Pages artifact).
  output: "export",
  images: {
    // No image-optimization server on GitHub Pages.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
