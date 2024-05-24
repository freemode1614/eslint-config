import { Linter } from "eslint";

export default {
  files: ["**/*.json"],
  plugins: ["jsonc"],
  extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
} as Linter.ConfigOverride;
