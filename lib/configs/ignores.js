

/**
 *
 * Default ignore list for most common project.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ignores: [
      // Module folder
      "node_modules/**",
      // Build Output
      "npm/**",
      "build/**",
      "dist/**",
      // Temp files
      "temp/**",
    ],
  },
];
