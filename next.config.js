/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    // https://nextjs.org/docs/api-reference/next/image#disable-static-imports
    disableStaticImages: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      // ref: https://zenn.dev/catnose99/articles/49c12f84182bdf
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
