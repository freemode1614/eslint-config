import { Linter } from "eslint";
import jest from "eslint-plugin-jest";

import { isUsingJest } from "@/utils";

export default (isUsingJest
  ? [
      {
        files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
      },
      jest.configs["flat/all"],
    ]
  : []) as Linter.FlatConfig[];
