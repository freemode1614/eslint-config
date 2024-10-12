import jest from "eslint-plugin-jest";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}"],
    ...jest.configs["flat/recommended"],
  },
];
