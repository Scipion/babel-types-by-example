import nextMDX from "@next/mdx";
import routesConfig from "./routes.config.mjs";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  assetPrefix: isProd ? routesConfig.home : undefined,
};

const withMDX = nextMDX();

export default withMDX(nextConfig);
