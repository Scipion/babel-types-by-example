import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
const isProd = process.env.NODE_ENV === "production";

const withMDX = nextMDX({
  options: {
    rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  assetPrefix: isProd
    ? "https://scipion.github.io/babel-types-by-example/"
    : undefined,
};

export default withMDX(nextConfig);
