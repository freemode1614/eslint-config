
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import { parser as tsParser } from "typescript-eslint";

import Env from "../env.js";

const tsconfigPath = Env.tsconfigPath;
/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    files: ["*.tsx", "*.jsx"],
    settings: {
      react: { version: "detect" },
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.worker,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        project: tsconfigPath,
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true,
          impliedStrict: true,
        },
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "react-refresh": reactRefresh,
    },
    rules: Object.assign(
      react.configs.recommended.rules,
      reactHooks.configs.recommended.rules,
      jsxA11y.configs.recommended.rules,
      Env.usingJsxRuntime ? react.configs["jsx-runtime"].rules : {},
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
      }
    ),
  }
]
