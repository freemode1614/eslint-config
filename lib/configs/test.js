import jest from "eslint-plugin-jest";

import Env from "../env";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default Env.usingJest ? [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}"],
    ...jest.configs["flat/recommended"],
  },
] : [];
