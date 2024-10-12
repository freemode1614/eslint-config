import n from "eslint-plugin-n";

import Env from "../env.js"

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ...n.configs["flat/recommended-script"],
    settings: {
      tsconfigPath: Env.tsconfigPath,
    },
  }
]
