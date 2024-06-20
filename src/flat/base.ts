import { Linter } from "eslint";
import * as compat from "eslint-plugin-compat";
import * as import_ from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

import customRules from "@/rules/custom";
import { isESModule, isUsingReact, isUsingTypescript } from "@/utils";

const settings: Linter.Config["settings"] = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      project: [
        "tsconfig.json", //
        "packages/*/tsconfig.json",
      ],
    },
  },
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
  node: {
    typescriptExtensionMap: [
      ["", ".js"],
      [".ts", ".js"],
      [".cts", ".cjs"],
      [".mts", ".mjs"],
      [".tsx", ".jsx"],
    ],
  },
};

export default [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    plugins: Object.assign({
      compat,
      "simple-import-sort": simpleImportSort,
      import: import_,
      jsdoc,
      unicorn,
    }),
    settings,
  },
  isESModule ? n.configs["flat/recommended-module"] : n.configs["flat/recommended-script"],
  {
    rules: Object.assign(
      compat.configs.recommended.rules,
      unicorn.configs.recommended.rules,
      isUsingReact ? import_.configs.react.rules : {},
      isUsingTypescript ? import_.configs.typescript.rules : {},
      isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"].rules : jsdoc.configs["flat/recommended"],
      customRules,
    ),
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
