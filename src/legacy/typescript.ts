import { Linter } from "eslint";

const files = ["**/*.ts", "**/*.tsx"];

export default {
  files,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
} as Linter.ConfigOverride;
