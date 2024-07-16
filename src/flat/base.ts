import type { Linter } from "eslint";
import compat from "eslint-plugin-compat";
// import * as importPlugin from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import importSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

import customRules from "@/rules/custom";
import styleRulesOverride from "@/rules/styles";
import { isESModule, isUsingPrettier, isUsingReact, isUsingTypescript } from "@/utils";

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
    plugins: {
      "simple-import-sort": importSort,
    },
    settings,
  },
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn,
    },
    rules: {
      // unicorn rules customization
      "unicorn/prefer-module": isESModule ? "error" : "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/prevent-abbreviations": [
        "warn",
        {
          replacements: {
            useRef: false,
            ref: false,
            props: false,
            dir: false,
            msg: false,
            dev: false,
            prod: false,
            args: false,
            i: false,
            j: false,
            req: false,
            resp: false,
          },
        }
      ],
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [/API/, /JSON/, /^App/, /^@/, /^$/],
        }
      ],
      "unicorn/prefer-set-has": "warn",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-push-push": "warn",
      "unicorn/prefer-export-from": "warn",
      "unicorn/no-array-for-each": "off",
      "unicorn/import-style": ["warn"],
      "unicorn/prefer-spread": "warn",
      "unicorn/no-for-loop": "warn",
      // Disable no-null rule, since `null` is a valid ReactNode for function component.
      "unicorn/no-null": isUsingReact ? "off" : "warn",
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
      "**/temp/**"
    ],
  }
] as Linter.FlatConfig[];
