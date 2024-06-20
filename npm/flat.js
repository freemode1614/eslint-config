import { isESModule, isUsingReact, isUsingTypescript, custom_default, isUsingJest } from './chunk-K45L7TJT.js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import * as compat from 'eslint-plugin-compat';
import * as import_ from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import n from 'eslint-plugin-n';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import jest from 'eslint-plugin-jest';
import jsonc from 'eslint-plugin-jsonc';
import { resolve } from 'node:path';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import fsExtra from 'fs-extra';
import globals from 'globals';
import semver from 'semver';
import { parser, configs } from 'typescript-eslint';

var settings = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"]
  },
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      project: [
        "tsconfig.json",
        //
        "packages/*/tsconfig.json"
      ]
    }
  },
  jsdoc: {
    tagNamePreference: {
      arg: "arg",
      argument: "argument",
      const: "const",
      constructor: "constructor",
      defaultvalue: "defaultvalue",
      desc: "desc",
      emits: "emits",
      exception: "exception",
      extends: "extends",
      fileoverview: "fileoverview",
      func: "func",
      host: "host",
      method: "method",
      overview: "overview",
      prop: "prop",
      return: "return",
      var: "var",
      virtual: "virtual",
      yield: "yield"
    }
  },
  node: {
    typescriptExtensionMap: [
      ["", ".js"],
      [".ts", ".js"],
      [".cts", ".cjs"],
      [".mts", ".mjs"],
      [".tsx", ".jsx"]
    ]
  }
};
var base_default = [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    plugins: Object.assign({
      compat,
      "simple-import-sort": simpleImportSort,
      import: import_,
      jsdoc,
      unicorn
    }),
    settings
  },
  isESModule ? n.configs["flat/recommended-module"] : n.configs["flat/recommended-script"],
  {
    rules: Object.assign(
      compat.configs.recommended.rules,
      unicorn.configs.recommended.rules,
      isUsingReact ? import_.configs.react.rules : {},
      isUsingTypescript ? import_.configs.typescript.rules : {},
      isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"].rules : jsdoc.configs["flat/recommended"],
      custom_default
    )
  },
  {
    ignores: [
      "**/*.{css,less,stylus,pcss}",
      "**/*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**"
    ]
  }
];
var jest_default = isUsingJest ? [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"]
  },
  jest.configs["flat/all"]
] : [];
var json_default = [
  ...jsonc.configs["flat/recommended-with-json"],
  //
  ...jsonc.configs["flat/prettier"]
];
var { readJSONSync } = fsExtra;
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var reactFiles = ["**/*.{tsx,jsx}"];
var languageOptions = {
  parser: parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  globals: {
    ...globals.serviceworker,
    ...globals.worker,
    ...globals.builtin,
    ...globals.browser
  }
};
var configs3 = [
  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh
    },
    languageOptions,
    settings: { react: { version: "detect" } }
  },
  {
    files: reactFiles,
    rules: Object.assign(
      {
        // reactRefresh.configs.recommended.rules,
        "react-refresh/only-export-components": [
          "error",
          {
            checkJS: false,
            allowConstantExport: true,
            allowExportNames: [
              `action`,
              // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
              `loader`,
              // The route loader is called before the route renders and provides data for the element through useLoaderData.
              `caseSensitive`,
              // Instructs the route to match case or not.
              `index`,
              `handle`,
              `errorElement`,
              `ErrorBoundary`,
              `shouldRevalidate`
              // Using this API risks your UI getting out of sync with your data, use with caution!
            ]
          }
        ]
      },
      react.configs.recommended.rules,
      reactHooks.configs.recommended.rules,
      jsxA11y.configs.recommended.rules,
      isReactVersionGreaterThan17 ? react.configs["jsx-runtime"].rules : {}
    )
  }
];
var react_default = configs3;
var files = ["**/*.ts", "**/*.tsx"];
var typescript_default = [...configs.recommended, ...configs.stylistic].map((cfg) => ({ ...cfg, files }));

// src/flat.ts
var config = [...base_default, ...jest_default, ...json_default, ...react_default, ...typescript_default, prettierRecommended];
var flat_default = config;

export { flat_default as default };
