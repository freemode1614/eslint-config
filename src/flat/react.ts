import nodePath from "node:path";

import { Linter } from "eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import fsExtra from "fs-extra";
import globals from "globals";
import semver from "semver";
import { parser as tsParser } from "typescript-eslint";

const { readJSONSync } = fsExtra;

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

const reactFiles = ["**/*.{tsx,jsx}"];

const languageOptions: Linter.FlatConfig["languageOptions"] = {
  parser: tsParser as unknown as Linter.FlatConfigParserModule,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
  },
  globals: {
    ...globals.serviceworker,
    ...globals.worker,
    ...globals.builtin,
    ...globals.browser,
  },
};

const configs: Linter.FlatConfig[] = [
  {
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh,
    },
    languageOptions,
    settings: { react: { version: "detect" } },
  },
  {
    files: reactFiles,
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
];

export default configs;
