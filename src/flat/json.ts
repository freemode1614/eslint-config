import { Linter } from "eslint";
import jsonc from "eslint-plugin-jsonc";

export default [
  ...jsonc.configs["flat/base"],
  ...jsonc.configs["flat/prettier"],
  ...jsonc.configs["flat/recommended-with-json"] //
] as Linter.FlatConfig[];
