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
      },
    },
  ],
  "unicorn/filename-case": [
    "warn",
    {
      case: "camelCase",
      ignore: [
        /API/,
        /JSON/,
        // Entry file name for most of the scaffold
        /App/,
        // For dynamic router name prefix
        /^@/,
        // For optional router name prefix
        /^$/,
      ],
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
} as Partial<Linter.RulesRecord>;
