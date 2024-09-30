/**
 * @type {import("eslint".Linter.Config)}
 */
export default [
  {
    ignores: [
      "*.{css,less,stylus,pcss}",
      "*.d.ts",
      "npm/**",
      "node_modules/**",
      "build/**",
      "dist/**",
      "temp/**",
    ],
  },
];
