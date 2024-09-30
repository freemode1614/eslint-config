import eslint from "@eslint/js";
import compat from "eslint-plugin-compat";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
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
]
  .concat(...jsonc.configs["flat/recommended-with-jsonc"])
  .concat(
    ...(Env.usingTypescript
      ? [
          {
            ...jsdoc.configs["flat/recommended-typescript"],
            rules: {
              ...jsdoc.configs["flat/recommended-typescript"].rules,
              "jsdoc/require-param": "off",
              "jsdoc/require-jsdoc": "off",
              "jsdoc/require-returns": "off",
            },
          },
        ]
      : [jsdoc.configs["flat/recommended"]])
  )
  .concat(...(Env.usingPrettier ? [prettier] : []))
  .concat(
    ...(Env.usingEsmodule
      ? [
          {
            settings: {
              tsconfigPath: Env.tsconfigPath,
            },
            ...n.configs["flat/recommended-module"],
            rules: {
              ...n.configs["flat/recommended-module"].rules,
              "n/no-missing-import": [
                "off",
                {
                  tsconfigPath: Env.tsconfigPath,
                },
              ],
            },
          },
        ]
      : [
          {
            settings: {
              tsconfigPath: Env.tsconfigPath,
            },
            ...n.configs["flat/recommended-script"],
          },
        ])
  );
