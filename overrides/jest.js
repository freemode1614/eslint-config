/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    "jest/globals": true,
  },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended"],
  files: ["**/*.{spec,test}.{j,t}sx?"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: { version: "detect" },
  },
  rules: {},
};

module.exports = config;
