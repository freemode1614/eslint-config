const jest = require("eslint-plugin-jest");

/**
 * @static
 */
const files = ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"];

/**
 * @param {object} root0 Options
 * @param {boolean} root0.isUsingJest - Project is using jest
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Configs For Test Files.
 */
function testEslintConfigGen({ isUsingJest }) {
  /**
   * @type {import("eslint").Linter.Config}
   */
  const config = {
    files,
    plugins: isUsingJest ? ["jest"] : [],
    extends: isUsingJest ? ["plugin:jest/all"] : [],
  };

  return config;
}

/**
 * @param {object} root0 Options
 * @param {boolean} root0.isUsingJest - Project is using jest
 * @returns {import("eslint").Linter.FlatConfig[]} - Flat Eslint Configs For Test Files.
 */
function testEslintFlatConfigGen({ isUsingJest }) {
  /**
   * @type {import("eslint").Linter.FlatConfig[]}
   */
  const configs = isUsingJest
    ? [
        {
          files,
          ...jest.configs["flat/all"],
        },
      ]
    : [];

  return configs;
}

module.exports = {
  legacy: testEslintConfigGen,
  flat: testEslintFlatConfigGen,
};
