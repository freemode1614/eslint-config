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
    files: ["**/*.js", "**/*.json", "*.ts", "*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
];

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
          impliedStrict: true,
        },
      },
    },
  },
  ...commonTsConfig,
  {
    rules: {
      // TYPESCRIPT
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/array-type": [
        "off",
        {
          default: "array-simple",
        },
      ],
    },
  },
];
