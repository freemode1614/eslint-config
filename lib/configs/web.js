import compat from "eslint-plugin-compat";
import tailwind from "eslint-plugin-tailwindcss";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...tailwind.configs["flat/recommended"],
  compat.configs["flat/recommended"],
];
