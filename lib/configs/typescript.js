import globals from "globals";
import tseslint, { parser } from "typescript-eslint";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export const commonTsConfig = [
  ...tseslint.configs.recommendedTypeChecked,
];

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...commonTsConfig,
  {
    languageOptions: {
      parser,
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.ts"]
        },
        ecmaVersion: "latest",
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          impliedStrict: true,
        },
      },
    },
  },
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
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/array-type": [
        "off",
        {
          default: "array-simple",
        },
      ],
    },
  },
];
