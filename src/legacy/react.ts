import nodePath from "node:path";

import { Linter } from "eslint";
import { readJSONSync } from "fs-extra";
import semver from "semver";

const isReactVersionGreaterThan17 = (function checkReactVersion() {
  // Add jsx-runtime for ReactV17 or higher version.
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const reactPackage = readJSONSync(nodePath.resolve(process.cwd(), "node_modules/react/package.json"));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    // Can't find react in local, just ignore the error and return a false.
    return false;
  }
}());

const files = ["**/*.{tsx,jsx}"];

const config = {
  files,
  parser: "@typescript-eslint/parser",
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
    isReactVersionGreaterThan17 ? "plugin:react/jsx-runtime" : ""
  ].filter(Boolean),
  settings: { react: { version: "detect", }, },
  rules: {
    // Force only export components from a TSX or JSX file.
    "react-refresh/only-export-components": [
      "error",
      {
        allowConstantExport: true,
        allowExportNames: [
          "action", // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
          "loader", // The route loader is called before the route renders and provides data for the element through useLoaderData.
          "caseSensitive", // Instructs the route to match case or not.
          "index",
          "handle",
          "errorElement",
          "ErrorBoundary",
          "shouldRevalidate" // Using this API risks your UI getting out of sync with your data, use with caution!
        ],
      }
    ],
  },
} as Linter.ConfigOverride;

export default config;
