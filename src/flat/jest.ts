import { Linter } from "eslint";
import * as jestPlugin from "eslint-plugin-jest";
import globals from "globals";

import { isUsingJest } from "@/utils";

export default (isUsingJest
  ? [
      {
        files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
        ...jestPlugin.configs["flat/recommended"],
        rules: {
          ...jestPlugin.configs["flat/recommended"].rules,
        },
        settings: {
          global: globals.jest,
        },
      },
    ]
  : []) as Linter.FlatConfig[];
