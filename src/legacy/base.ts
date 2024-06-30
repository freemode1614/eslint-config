import { Linter } from "eslint";

import customRules from "@/rules/custom";
import deprecated from "@/rules/deprecated";
import logic from "@/rules/logic";
import styles from "@/rules/styles";
import suggestions from "@/rules/suggestions";
import { isESModule, isUsingPrettier, isUsingReact, isUsingTypescript } from "@/utils";

const plugins = ["compat", "jsdoc", "n", "simple-import-sort", "unicorn"];
const extends_ = [`plugin:compat/recommended`, `plugin:unicorn/recommended`, `plugin:tailwindcss/recommended`];

const rules: Partial<Linter.RulesRecord> = {
  ...logic.rules!,
  ...suggestions.rules!,
  ...deprecated.rules!,
  ...customRules,
};

if (isESModule) {
  // This plugin intends to support linting of ES2015+ (ES6+) import/export syntax,
  // and prevent issues with misspelling of file paths and import names.
  // All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.
  plugins.push("import");
  extends_.push(`plugin:import/recommended`);
  isUsingPrettier && extends_.push(`plugin:import/react`);
  isUsingTypescript && extends_.push(`plugin:import/typescript`);
}

if (isESModule) {
  extends_.push(`plugin:n/recommended-module`);
} else {
  extends_.push(`plugin:n/recommended-script`);
}

if (isUsingPrettier) {
  extends_.push(`plugin:prettier/recommended`);
} else {
  Object.assign(rules, styles.rules!);
}

if (isUsingTypescript) {
  extends_.push(`plugin:jsdoc/recommended-typescript`);
} else {
  extends_.push(`plugin:jsdoc/recommended`);
}

export default {
  env: {
    browser: true,
    worker: true,
    node: true,
    commonjs: !isESModule,
    es6: isESModule,
    jest: true,
  },
  parserOptions: {
    sourceType: isESModule ? "module" : "commonjs",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: isUsingReact,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  // Ignore css files and .d.ts files.
  ignorePatterns: [
    "**/*.{css,less,stylus,pcss}",
    "**/*.d.ts",
    "**/npm/**",
    "**/node_modules/**",
    "**/build/**",
    "**/dist/**",
    "**/temp/**",
  ],
  rules,
  plugins,
  extends: extends_,
} as Linter.Config;
