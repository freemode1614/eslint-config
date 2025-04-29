import tailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.devtools,
      },
    },
  },
  ...tailwindcss.configs["flat/recommended"],
];
