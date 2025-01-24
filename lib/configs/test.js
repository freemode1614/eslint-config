import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default Env.usingJest
  ? [
      {
        files: ["**/*.{spec,test}.{js,ts,jsx,tsx}"],
        ...jest.configs["flat/recommended"],
      },
      {
        files: ["**/*.{spec,test}.{jsx,tsx}"],
        ...testingLibrary.configs["flat/dom"],
        ...testingLibrary.configs["flat/react"],
      },
    ]
  : [];
