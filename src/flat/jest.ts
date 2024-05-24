import { Linter } from "eslint";
import jest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
  },
  ...jest.configs["flat/all"],
] as Linter.FlatConfig[];
