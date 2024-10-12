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
];
