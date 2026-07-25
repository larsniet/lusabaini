import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  // Pin the monorepo root so Turbopack doesn't mis-infer the workspace root.
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  transpilePackages: ["@lusabaini/ui"],
  images: {
    loader: "custom",
    loaderFile: "./src/lib/sanityImageLoader.ts",
  },
};

export default nextConfig;
