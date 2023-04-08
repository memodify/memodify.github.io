module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.config.js", "*.config.mjs"],
  rules: {
    // "import/order": [
    //   "error",
    //   {
    //     alphabetize: {
    //       order: "asc",
    //     },
    //   },
    // ],
    "@next/next/no-img-element": "off",
    "tailwindcss/classnames-order": "off",
  },
};
