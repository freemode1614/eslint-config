import nodePath from "node:path";

import eslint from "@eslint/js";
import compat from "eslint-plugin-compat";
import jestPlugin from "eslint-plugin-jest";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import fsExtra from "fs-extra";
import globals from "globals";
import semver from "semver";
import tseslint from "typescript-eslint";
import { parser as tsParser } from "typescript-eslint";
import { flatConfigs } from "eslint-plugin-import"

const { readJSONSync } = fsExtra;

const package_ = readJSONSync(nodePath.resolve(process.cwd(), "package.json"), {
  throws: false,
});

if (!package_) {
  throw new Error(
    "No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.",
  );
}

const {
  dependencies = {},
  devDependencies = {},
  peerDependencies = {},
} = package_;

const localProjectDeps = Object.keys(
  Object.assign({}, dependencies, devDependencies, peerDependencies),
);

const isUsingReact = localProjectDeps.includes("react");
const isUsingPrettier = localProjectDeps.includes("prettier");
const isUsingTypescript = localProjectDeps.includes("typescript");
// const isUsingJest = localProjectDeps.includes("jest");
const isESModule = package_.type === "module";

const isReactVersionGreaterThan17 = (function checkReactVersion() {
  // Add jsx-runtime for ReactV17 or higher version.
  try {
    const reactPackage = readJSONSync(
      nodePath.resolve(process.cwd(), "node_modules/react/package.json"),
    );
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    // Can't find react in local, just ignore the error and return a false.
    return false;
  }
})();

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    settings: { 
      react: { version: "detect" },
      'import/resolver': {
          typescript: {},
        },
     },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.serviceworker,
        ...globals.worker,
        ...globals.builtin,
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true,
          impliedStrict: true,
        },
      },
    },
    plugins: {
      unicorn,
      react: react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh,
      "simple-import-sort": importSort,
    },
  },
  eslint.configs.recommended,
  compat.configs["flat/recommended"],
  isESModule
  ? n.configs["flat/recommended-module"]
  : n.configs["flat/recommended-script"],
  isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"] : jsdoc.configs["flat/recommended"],
  isUsingPrettier ? prettier : undefined,
  isUsingReact ? flatConfigs.react : undefined,
  isUsingTypescript ? flatConfigs.typescript: undefined,
  ...jsonc.configs["flat/recommended-with-jsonc"],
  ...jsonc.configs["flat/recommended-with-json"],
  ...jsonc.configs["flat/recommended-with-json5"],
  ...jsonc.configs["flat/prettier"],
  ...tailwind.configs["flat/recommended"],
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommended,
  {
    ignores: ["**/*.json", "*.ts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.json"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
    },
    settings: {
      global: globals.jest,
    },
  },
  {
    files: ["**/*.{tsx,jsx}"],
    rules: Object.assign(
      react.configs.recommended.rules,
      reactHooks.configs.recommended.rules,
      jsxA11y.configs.recommended.rules,
      isReactVersionGreaterThan17 ? react.configs["jsx-runtime"].rules : {},
      {
        "react-refresh/only-export-components": [
          "error",
          {
            checkJS: false,
            allowConstantExport: true,
            allowExportNames: [
              "action", // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
              "loader", // The route loader is called before the route renders and provides data for the element through useLoaderData.
              "caseSensitive", // Instructs the route to match case or not.
              "index",
              "handle",
              "errorElement",
              "ErrorBoundary",
              "shouldRevalidate", // Using this API risks your UI getting out of sync with your data, use with caution!
            ],
          },
        ],
      },
    ),
  },
  {
    ignores: [
      "*.{css,less,stylus,pcss}",
      "*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**",
    ],
  },
  {
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // While using typescript, should ignore below rules for JSDoc
      "jsdoc/require-jsdoc": isUsingTypescript ? "off" : "warn",
      "jsdoc/require-returns": isUsingTypescript ? "off" : "warn",
      "jsdoc/require-returns-description": isUsingTypescript ? "off" : "warn",
      "jsdoc/require-param": isUsingTypescript ? "off" : "warn",
      "jsdoc/require-param-description": isUsingTypescript ? "off" : "warn",
      "jsdoc/check-param-names": isUsingTypescript ? "off" : "warn",
      "jsdoc/tag-lines": ["error", "always", { count: 0, startLines: 1 }],

      // TODO: Can't setup the right configuration for this, so ignore now.
      "n/no-missing-import": "off",
      "n/no-missing-require": "off",

      "no-case-declarations": "off",

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
            args: false,
            req: false,
            resp: false,
            num: false,
            doc: false,
            env: false,
            envs: false,
          },
        },
      ],
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [/^App/, /^@/, /^\$/],
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
    },
  },
].filter(Boolean);
