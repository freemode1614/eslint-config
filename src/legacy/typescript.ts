import { Linter } from "eslint";

const files = ["**/*.ts", "**/*.tsx"];

export default {
  files,
  extends: [
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/stylistic",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": ["error", {
      checksVoidReturn: {
        arguments: false,
        attributes: false,
      },
    }],
  },
} as Linter.ConfigOverride;
