import tailwind from "eslint-plugin-tailwindcss";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [].concat(...tailwind.configs["flat/recommended"]);
