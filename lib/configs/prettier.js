import prettierPlugin from "eslint-plugin-prettier/recommended";

import Env from "../env.js";

export default Env.usingPrettier
  ? []
  : /**
     * @type {import("eslint").Linter.Config[]}
     */
    [prettierPlugin];
