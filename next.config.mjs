// @ts-check
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import withMDXFm from "@next/mdx";
import remarkFm from "remark-next-mdx-frontmatter";
import rehypePrism from "@mapbox/rehype-prism";

const withMDX = withMDXFm({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      [remarkFm, { layoutPath: "../components/Post" }],
      remarkSlug,
      remarkGfm,
    ],
    rehypePlugins: [
      [rehypePrism, { ignoreMissing: true }], // syntax highlighting. https://github.com/mapbox/rehype-prism
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  pageExtensions: ["ts", "tsx", "mdx"],

  images: {
    // https://nextjs.org/docs/api-reference/next/image#disable-static-imports
    disableStaticImages: true,
  },

  output: "export",

  webpack: (config) => {
    config.module.rules.push({
      // ref: https://zenn.dev/catnose99/articles/49c12f84182bdf
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  appDir: true,
};

import { withSuperjson } from "next-superjson";

const config = withMDX(
  withSuperjson()({ ...nextConfig, reactStrictMode: true }),
);

export default config;
