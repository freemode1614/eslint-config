import eslint from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import { projectStructurePlugin } from "eslint-plugin-project-structure";
import importSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  eslint.configs["recommended"],
  {
    ...jsdoc.configs["flat/recommended"],
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"],
    rules: {
      ...jsdoc.configs["flat/recommended"].rules,
      "jsdoc/tag-lines": ["error", "always", { count: 0, startLines: 1 }],
    },
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  {
    plugins: {
      unicorn,
      "simple-import-sort": importSort,
      "project-structure": projectStructurePlugin,
    },
  },
  {
    rules: {
      // IMPORT-SORT
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // UNICORN
      "unicorn/prefer-module": Env.usingEsmodule ? "error" : "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/prevent-abbreviations": [
        "warn",
        {
          replacements: {
            // reference
            useRef: false,
            ref: false,
            // properties
            prop: false,
            props: false,
            // directory
            dir: false,
            // message
            msg: false,
            msgs: false,
            // development
            dev: false,
            // production
            prod: false,
            // arguments
            args: false,
            // request
            req: false,
            // response
            resp: false,
            // numbers
            num: false,
            nums: false,
            // documents
            doc: false,
            docs: false,
            // enviroments
            env: false,
            envs: false,
            // function
            fn: false,
            func: false,
            // error
            err: false,
            // event
            e: false,
            ev: false,
            // accumulator
            acc: false,
          },
        },
      ],
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [/^App/, /^@/, /^\$/],
        },
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
      "unicorn/no-null": Env.usingReact ? "off" : "warn",

      // TODO: PROJECT STRUCTURE
      // "project-structure/folder-structure": ["error", folderStructureConfig],
      // "project-structure/independent-modules": [
      //   "error",
      //   independentModulesConfig,
      // ],
      // "project-structure/naming-rules": ["error", namingRulesConfig],
    },
  },
];
