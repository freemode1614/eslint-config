import n from "eslint-plugin-n";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ...n.configs["flat/recommended-module"],
    files: ["**/*.js", "**/*.jsx"],
    settings: {
      tsconfigPath: Env.tsconfigPath,
    },
    rules: {
      ...n.configs["flat/recommended-module"].rules,
      "n/no-missing-import": [
        "off",
        {
          tsconfigPath: Env.tsconfigPath,
        },
      ],
    },
  },
];
