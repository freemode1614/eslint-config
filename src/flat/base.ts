import type { Linter } from "eslint";
import compat from "eslint-plugin-compat";
// TODO: Add import plugin, when flat config is office support
// import * as importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import importSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

import styleRulesOverride from "@/rules/styles";
import { isESModule, isUsingPrettier, isUsingTypescript } from "@/utils";

const settings: Linter.Config["settings"] = {
  // "import/parsers": {
  //   "@typescript-eslint/parser": [".ts", ".tsx"],
  // },
  // "import/resolver": {
  //   typescript: {
  //     alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //     project: [
  //       "tsconfig.json", //
  //       "packages/*/tsconfig.json"
  //     ],
  //   },
  // },
  // jsdoc: {
  //   tagNamePreference: {
  //     arg: "arg",
  //     argument: "argument",
  //     const: "const",
  //     constructor: "constructor",
  //     defaultvalue: "defaultvalue",
  //     desc: "desc",
  //     emits: "emits",
  //     exception: "exception",
  //     extends: "extends",
  //     fileoverview: "fileoverview",
  //     func: "func",
  //     host: "host",
  //     method: "method",
  //     overview: "overview",
  //     prop: "prop",
  //     return: "return",
  //     var: "var",
  //     virtual: "virtual",
  //     yield: "yield",
  //   },
  // },
};

export default [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    settings,
  },
  {
    plugins: {
      "simple-import-sort": importSort,
    },
  },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn,
    },
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  ...jsonc.configs["flat/recommended-with-json"],
  ...jsonc.configs["flat/recommended-with-json5"],
  ...jsonc.configs["flat/prettier"],
  compat.configs["flat/recommended"],
  isESModule
    ? n.configs["flat/recommended-module"]
    : n.configs["flat/recommended-script"],
  isUsingTypescript
    ? jsdoc.configs["flat/recommended-typescript"]
    : jsdoc.configs["flat/recommended"],
  isUsingPrettier ? prettier : styleRulesOverride,
  ...tailwind.configs["flat/recommended"],
  {
    ignores: [
      "**/*.{css,less,stylus,pcss}",
      "**/*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**"
    ],
  }
] as Linter.FlatConfig[];
