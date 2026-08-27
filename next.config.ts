import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages serves plain files, no Node server.
  output: "export",
  // next/image optimization needs a server; disable it for the export.
  images: { unoptimized: true },
  trailingSlash: true,
  // No basePath: adamyordan.github.io is a user site served from the domain root.
};

export default nextConfig;
