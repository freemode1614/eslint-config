import jest from "eslint-plugin-jest";
import testingLibrary from "eslint-plugin-testing-library";

import * as env from "../env.js";

export default env.usingJest()
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
