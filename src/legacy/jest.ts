import { Linter } from "eslint";

import { isUsingJest } from "@/utils";

export default {
  files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
  plugins: isUsingJest ? ["jest"] : [],
  extends: isUsingJest ? ["plugin:jest/all"] : [],
} as Linter.ConfigOverride;
