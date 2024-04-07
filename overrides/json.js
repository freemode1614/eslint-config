const json = require("eslint-plugin-json");

/**
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Config For JSON Files.
 */
function jsonEslintConfigGen() {
  /**
   * @type {import("eslint").Linter.Config}
   */
  const config = {
    files: ["**/*.json"],
    plugins: ["json"],
    extends: ["plugin:json/recommended"],
    rules: {
      "json/*": ["error", { allowComments: true }],
    },
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
    {
      files: ["**/*.json"],
      plugins: {
        json,
      },
      rules: {
        ...json.configs["recommended-with-comments"].rules,
      },
    },
  ];

  return configs;
}

module.exports = {
  legacy: jsonEslintConfigGen,
  flat: jestESLintFlatConfigGen,
};
