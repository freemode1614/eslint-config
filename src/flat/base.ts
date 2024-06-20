import { Linter } from "eslint";
import compat from "eslint-plugin-compat";
// import * as importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import importSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

import customRules from "@/rules/custom";
import { isESModule, isUsingTypescript } from "@/utils";

const settings: Linter.Config["settings"] = {
  // "import/parsers": {
  //   "@typescript-eslint/parser": [".ts", ".tsx"],
  // },
  // "import/resolver": {
  //   typescript: {
  //     alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //     project: [
  //       "tsconfig.json", //
  //       "packages/*/tsconfig.json",
  //     ],
  //   },
  // },
  jsdoc: {
    tagNamePreference: {
      arg: "arg",
      argument: "argument",
      const: "const",
      constructor: "constructor",
      defaultvalue: "defaultvalue",
      desc: "desc",
      emits: "emits",
      exception: "exception",
      extends: "extends",
      fileoverview: "fileoverview",
      func: "func",
      host: "host",
      method: "method",
      overview: "overview",
      prop: "prop",
      return: "return",
      var: "var",
      virtual: "virtual",
      yield: "yield",
    },
  },
  // node: {
  //   typescriptExtensionMap: [
  //     ["", ".js"],
  //     [".ts", ".js"],
  //     [".cts", ".cjs"],
  //     [".mts", ".mjs"],
  //     [".tsx", ".jsx"],
  //   ],
  // },
};

export default [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    plugins: {
      unicorn,
      "simple-import-sort": importSort,
    },
    settings,
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  ...jsonc.configs["flat/recommended-with-json"],
  ...jsonc.configs["flat/recommended-with-json5"],
  ...jsonc.configs["flat/prettier"],
  compat.configs["flat/recommended"],
  isESModule ? n.configs["flat/recommended-module"] : n.configs["flat/recommended-script"],
  isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"] : jsdoc.configs["flat/recommended"],
  prettier,
  {
    rules: Object.assign(customRules),
  },
  {
    ignores: [
      "**/*.{css,less,stylus,pcss}",
      "**/*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**",
    ],
  },
] as Linter.FlatConfig[];
