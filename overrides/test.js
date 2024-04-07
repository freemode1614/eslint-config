const jest = require("eslint-plugin-jest");

/**
 * @static
 */
const files = ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"];

/**
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Configs For Test Files.
 */
function testEslintConfigGen() {
  /**
   * @type {import("eslint").Linter.Config}
   */
  const config = {
    files,
    plugins: ["jest"],
    extends: ["plugin:jest/all"],
  };

  return config;
}

/**
 * @returns {import("eslint").Linter.FlatConfig[]} - Flat Eslint Configs For Test Files.
 */
function testEslintFlatConfigGen() {
  /**
   * @type {import("eslint").Linter.FlatConfig[]}
   */
  const configs = [
    {
      files,
      ...jest.configs["flat/all"],
    },
  ];

  return configs;
}

module.exports = {
  legacy: testEslintConfigGen,
  flat: testEslintFlatConfigGen,
};
