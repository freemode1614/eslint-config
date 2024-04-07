/**
 * @returns {import("eslint").Linter.Config} Return ESLint config for ts,tsx files.
 */
function tsESLintConfigGen() {
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

  return config;
}

module.exports = tsESLintConfigGen;
