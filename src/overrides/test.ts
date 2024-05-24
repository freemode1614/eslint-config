import jest from "eslint-plugin-jest";

const files = ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"];

/**
 * @param root0 Options
 * @param root0.isUsingJest - Project is using jest
 * @returns - Legacy Eslint Configs For Test Files.
 */
export function legacy({ isUsingJest }: { isUsingJest: boolean }) {
  /**
   */
  const config = {
    files,
    plugins: isUsingJest ? ["jest"] : [],
    extends: isUsingJest ? ["plugin:jest/all"] : [],
  };

  return config;
}

/**
 * @param root0 Options
 * @param root0.isUsingJest - Project is using jest
 * @returns - Flat Eslint Configs For Test Files.
 */
export function flat({ isUsingJest }: { isUsingJest: boolean }) {
  /**
   */
  const configs = isUsingJest
    ? [
        {
          files,
          ...jest.configs["flat/all"],
        },
      ]
    : [{ files }];

  return configs;
}
