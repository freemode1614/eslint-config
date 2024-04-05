/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  files: ["**/*.ts", "**/*.tsx"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {},
};

module.exports = config;
