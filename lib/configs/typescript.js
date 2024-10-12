import globals from "globals";
import tseslint, { parser } from "typescript-eslint";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser,
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: Env.tsconfigPath,
        ecmaVersion: "latest",
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true
        }
      }
    }
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommended,
]
