import { Linter } from "eslint";
import * as jestPlugin from "eslint-plugin-jest";

import { isUsingJest } from "@/utils";

export default (isUsingJest
  ? [
    {
      files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...jestPlugin.configs["flat/recommended"],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      rules: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...jestPlugin.configs["flat/recommended"].rules,
      },
    }
  ]
  : []) as Linter.FlatConfig[];
