import { resolve } from "node:path";

import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { readJSONSync } from "fs-extra";
import globals from "globals";
import semver from "semver";
import { parser as tsParser } from "typescript-eslint";

const isReactVersionGreaterThan17 = (function checkReactVersion() {
  // Add jsx-runtime for ReactV17 or higher version.
  try {
    /**
     */
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    // Can't find react in local, just ignore the error and return a false.
    return false;
  }
})();

const files = ["**/*.{tsx,jsx}"];

/**
 * @param obj options.
 * @param obj.isUsingTypescript - Project is Using Typescript.
 * @returns - Legacy Eslint Config For React.
 */
export function legacy({ isUsingTypescript }: { isUsingTypescript: boolean }) {
  /**
   */
  const config = {
    // Write React in js or ts file is not recommended, so we just check jsx and tsx files.
    files,
    parser: isUsingTypescript ? "@typescript-eslint/parser" : undefined,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
        impliedStrict: true,
      },
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh"],
    extends: [
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      isReactVersionGreaterThan17 ? "plugin:react/jsx-runtime" : "",
    ].filter(Boolean),
    settings: { react: { version: "detect" } },
    rules: {
      // Force only export components from a TSX or JSX file.
      "react-refresh/only-export-components": [
        "error",
        {
          allowConstantExport: true,
          allowExportNames: [
            `action`, // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
            `loader`, // The route loader is called before the route renders and provides data for the element through useLoaderData.
            `caseSensitive`, // Instructs the route to match case or not.
            `index`,
            `handle`,
            `errorElement`,
            `ErrorBoundary`,
            `shouldRevalidate`, // Using this API risks your UI getting out of sync with your data, use with caution!
          ],
        },
      ],
    },
  };

  return config;
}

/**
 * @returns - Flat Eslint Config For React.
 */
export function flat() {
  /**
   */
  const languageOptions = {
    parser: tsParser,
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

  /**
   */
  const configs = [
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
      files,
      rules: Object.assign(
        {
          // reactRefresh.configs.recommended.rules,
          "react-refresh/only-export-components": [
            "error",
            {
              checkJS: false,
              allowConstantExport: true,
              allowExportNames: [
                `action`, // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
                `loader`, // The route loader is called before the route renders and provides data for the element through useLoaderData.
                `caseSensitive`, // Instructs the route to match case or not.
                `index`,
                `handle`,
                `errorElement`,
                `ErrorBoundary`,
                `shouldRevalidate`, // Using this API risks your UI getting out of sync with your data, use with caution!
              ],
            },
          ],
        },
        react.configs.recommended.rules,
        reactHooks.configs.recommended.rules,
        jsxA11y.configs.recommended.rules,
        isReactVersionGreaterThan17 ? react.configs["jsx-runtime"].rules : {},
      ),
    },
  ];

  return configs;
}
