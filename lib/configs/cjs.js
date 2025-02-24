import n from "eslint-plugin-n";
import globals from "globals";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    languageOptions: {
      globals: globals.commonjs,
    },
  },
  {
    ...n.configs["flat/recommended-script"],
    settings: {
      tsconfigPath: Env.tsconfigPath,
    },
  },
];
