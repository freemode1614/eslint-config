import { Linter } from "eslint";

import { isUsingTypescript } from "@/utils";

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


  "no-case-declarations": "off",

  "@typescript-eslint/consistent-type-definitions": "off",
  "@typescript-eslint/no-empty-interface": "warn",
} as Partial<Linter.RulesRecord>;
