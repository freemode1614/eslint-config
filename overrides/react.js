const { readJSONSync } = require("fs-extra");

/**
 * @param {object} obj Arguments
 * @param {boolean} obj.isReact  - Is using react
 * @param {boolean} obj.isTypescript - Is Using Typescript
 * @returns {import("eslint").Linter.Config} - ESLint Config For React.
 */
function reactEslintConfigGen({ isReact, isTypescript }) {
  /**
   * @type {import('eslint').Linter.Config}
   */
  const config = {
    files: ["**/*.{tsx,jsx}"],
    // parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true, experimentalObjectRestSpread: true },
    },
    extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
    plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh"],
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

  if (isTypescript) {
    config.parser = `@typescript-eslint/parser`;
  }

  if (!isReact) {
    return config;
  }

  // Add jsx-runtime for ReactV17 or higher version.
  try {
    /**
     * @type {import('pkg-types').PackageJson}
     */
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    if (reactPackage && semver.satisfies(reactPackage.version, ">=17")) {
      config.extends.push("plugin:react/jsx-runtime");
    }
  } catch (error) {
    console.error(error);
  }

  return config;
}

module.exports = reactEslintConfigGen;
