import compat from "eslint-plugin-compat";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.devtools,
      },
    },
  },
  ...tailwind.configs["flat/recommended"],
  compat.configs["flat/recommended"],
];
