import jsonc from "eslint-plugin-jsonc";

/**
 * @returns - Legacy Eslint Config For JSON Files.
 */
export function legacy() {
  /**
   */
  const config = {
    files: ["**/*.json"],
    plugins: ["jsonc"],
    extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"],
  };

  return config;
}

/**
 * @returns  - Flat Eslint Config For JSON Files.
 */
export function flat() {
  /**
   */
  const configs = [
    ...jsonc.configs["flat/recommended-with-json"], //
    ...jsonc.configs["flat/prettier"],
  ];
  return configs;
}
