import prettierPlugin from "eslint-plugin-prettier/recommended";

import * as utils from "../env.js";

export default utils.usingPrettier() ? [] : [prettierPlugin];

