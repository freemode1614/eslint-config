/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  files: ["**/*.tsx", "**/*.jsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true, experimentalObjectRestSpread: true },
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh"],
  settings: { react: { version: "detect" } },
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};

module.exports = config;
