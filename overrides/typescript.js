const { configs } = require("typescript-eslint");

const files = ["**/*.ts", "**/*.tsx"];

/**
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Config For TS Files.
 */
function tsESLintConfigGen() {
  /**
   * @type {import('eslint').Linter.Config}
   */
  const config = {
    files,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
  };

  return config;
}

/**
 * @returns {import("eslint").Linter.FlatConfig[]} - Flat Eslint Config For TS Files.
 */
function tsESLintFlatConfigGen() {
  return [...configs.recommended, ...configs.stylistic].map((cfg) => {
    return {
      ...cfg,
      files,
    };
  });
}

module.exports = {
  legacy: tsESLintConfigGen,
  flat: tsESLintFlatConfigGen,
};
