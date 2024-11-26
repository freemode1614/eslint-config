import eslint from "@eslint/js";
import compat from "eslint-plugin-compat";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import prettier from "eslint-plugin-prettier/recommended";
import { projectStructurePlugin } from "eslint-plugin-project-structure";
import importSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.builtin,
        ...globals.commonjs,
      },
    },
    plugins: {
      unicorn,
      "simple-import-sort": importSort,
      "project-structure": projectStructurePlugin,
    },
  },
  eslint.configs["recommended"],
  compat.configs["flat/recommended"],
  {
    ...jsdoc.configs["flat/recommended"],
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"],
    rules: {
      ...jsdoc.configs["flat/recommended"].rules,
      "jsdoc/tag-lines": ["error", "always", { count: 0, startLines: 1 }],
    }
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  ...(Env.usingPrettier ? [prettier] : []),
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
            useRef: false,
            ref: false,
            props: false,
            dir: false,
            msg: false,
            dev: false,
            prod: false,
            args: false,
            req: false,
            resp: false,
            num: false,
            doc: false,
            env: false,
            envs: false,
            fn: false,
            func: false,
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
  }
];
