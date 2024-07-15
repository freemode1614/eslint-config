import {
  custom_default,
  isESModule,
  isUsingJest,
  isUsingPrettier,
  isUsingTypescript,
  styles_default
} from "./chunk-UNFJOJDC.js";

// src/flat/base.ts
import compat from "eslint-plugin-compat";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import n from "eslint-plugin-n";
import prettier from "eslint-plugin-prettier/recommended";
import importSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
var settings = {
  // "import/parsers": {
  //   "@typescript-eslint/parser": [".ts", ".tsx"],
  // },
  // "import/resolver": {
  //   typescript: {
  //     alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //     project: [
  //       "tsconfig.json", //
  //       "packages/*/tsconfig.json",
  //     ],
  //   },
  // },
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
  }
};
var base_default = [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    plugins: {
      unicorn,
      "simple-import-sort": importSort
    },
    settings
  },
  ...jsonc.configs["flat/recommended-with-jsonc"],
  ...jsonc.configs["flat/recommended-with-json"],
  ...jsonc.configs["flat/recommended-with-json5"],
  ...jsonc.configs["flat/prettier"],
  compat.configs["flat/recommended"],
  isESModule ? n.configs["flat/recommended-module"] : n.configs["flat/recommended-script"],
  isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"] : jsdoc.configs["flat/recommended"],
  isUsingPrettier ? prettier : styles_default,
  ...tailwind.configs["flat/recommended"],
  {
    rules: Object.assign(custom_default)
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

// src/flat/jest.ts
import * as jestPlugin from "eslint-plugin-jest";
var jest_default = isUsingJest ? [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules
    }
  }
] : [];

// src/flat/json.ts
import jsonc2 from "eslint-plugin-jsonc";
var json_default = [
  ...jsonc2.configs["flat/recommended-with-json"],
  //
  ...jsonc2.configs["flat/prettier"]
];

// src/flat/react.ts
import nodePath from "node:path";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import fsExtra from "fs-extra";
import globals from "globals";
import semver from "semver";
import { parser as tsParser } from "typescript-eslint";
var { readJSONSync } = fsExtra;
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync(nodePath.resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var reactFiles = ["**/*.{tsx,jsx}"];
var languageOptions = {
  parser: tsParser,
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
var configs2 = [
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
              "action",
              // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
              "loader",
              // The route loader is called before the route renders and provides data for the element through useLoaderData.
              "caseSensitive",
              // Instructs the route to match case or not.
              "index",
              "handle",
              "errorElement",
              "ErrorBoundary",
              "shouldRevalidate"
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
var react_default = configs2;

// src/flat/typescript.ts
import { configs as configs3 } from "typescript-eslint";
var files = ["**/*.ts", "**/*.tsx"];
var typescript_default = [...configs3.recommended, ...configs3.stylistic].map((cfg) => ({ ...cfg, files }));

// src/flat.ts
var config = [...base_default, ...jest_default, ...json_default, ...react_default, ...typescript_default];
var flat_default = config;
export {
  flat_default as default
};
