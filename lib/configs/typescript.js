import globals from "globals";
import tseslint, { parser } from "typescript-eslint";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const commonTsConfig = [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.js', '**/*.json', "*.ts", "*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
]

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
  ...commonTsConfig,
]
