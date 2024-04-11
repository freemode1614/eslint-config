const jsonc = require("eslint-plugin-jsonc");

/**
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Config For JSON Files.
 */
function jsonEslintConfigGen() {
  /**
   * @type {import("eslint").Linter.Config}
   */
  const config = {
    files: ["**/*.json"],
    plugins: ["jsonc"],
    extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
  };

  return config;
}

/**
 * @returns {import("eslint").Linter.FlatConfig[]}  - Flat Eslint Config For JSON Files.
 */
function jestESLintFlatConfigGen() {
  /**
   * @type {import("eslint").Linter.FlatConfig[]}
   */
  const configs = [
    ...jsonc.configs["flat/recommended-with-json"], //
    ...jsonc.configs["flat/prettier"],
  ];
  return configs;
}

module.exports = {
  legacy: jsonEslintConfigGen,
  flat: jestESLintFlatConfigGen,
};
