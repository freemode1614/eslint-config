import { configs } from "typescript-eslint";

const files = ["**/*.ts", "**/*.tsx"];

/**
 * @returns - Legacy Eslint Config For TS Files.
 */
export function legacy() {
  /**
   */
  const config = {
    files,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
  };

  return config;
}

/**
 * @returns - Flat Eslint Config For TS Files.
 */
export function flat() {
  return [...configs.recommended, ...configs.stylistic].map((cfg) => {
    return {
      ...cfg,
      files,
    };
  });
}
