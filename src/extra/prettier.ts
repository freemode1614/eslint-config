import prettierPlugin from "eslint-plugin-prettier/recommended";

import * as utilities from "../env.js";

export default utilities.usingPrettier() ? [] : [prettierPlugin];
