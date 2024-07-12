import { Linter } from "eslint";

import { isESModule, isUsingReact, isUsingTypescript } from "@/utils";

export default {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",

  // While using typescript, should ignore below rules for JSDoc
  "jsdoc/require-jsdoc": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-returns": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-returns-description": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-param": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-param-description": isUsingTypescript ? "off" : "warn",
  "jsdoc/check-param-names": isUsingTypescript ? "off" : "warn",

  // TODO: Can't setup the right configuration for this, so ignore now.
  "n/no-missing-import": "off",
  "n/no-missing-require": "off",

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
      },
    },
  ],
  "unicorn/filename-case": [
    "warn",
    {
      case: {
        camelCase: true,
        pascalCase: true,
      },
      ignore: [/API/, /JSON/, /^App/, /^@/, /^$/],
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
  // Disable no-null rule, since `null` is a valid ReactNode for function component.
  "unicorn/no-null": isUsingReact ? "off" : "warn",
  "no-case-declarations": "off",

  "@typescript-eslint/consistent-type-definitions": "off",
} as Partial<Linter.RulesRecord>;
