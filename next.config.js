/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.GITHUB_PAGES ? "/memodify-website" : "",
};
