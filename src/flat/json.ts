import { Linter } from "eslint";
import jsonc from "eslint-plugin-jsonc";

export default [
  ...jsonc.configs["flat/recommended-with-json"], //
  ...jsonc.configs["flat/prettier"],
] as Linter.FlatConfig[];
