/* eslint-disable n/no-extraneous-import */

import { TSESLint } from "@typescript-eslint/utils";
import { configs } from "typescript-eslint";

export interface ConfigWithExtends extends TSESLint.FlatConfig.Config {
  extends?: TSESLint.FlatConfig.ConfigArray;
}

function config(
  ...configs: ConfigWithExtends[]
): TSESLint.FlatConfig.ConfigArray {
  return configs.flatMap((configWithExtends) => {
    const { extends: extendsArray, ...config } = configWithExtends;
    if (extendsArray == undefined || extendsArray.length === 0) {
      return config;
    }

    const extension = {
      ...(config.files && { files: config.files, }),
      ...(config.ignores && { ignores: config.ignores, }),
    };

    return [
      ...extendsArray.map(config_ => ({
        ...config_,
        ...extension,
      })),
      config
    ];
  });
}


export default config(
  // @ts-expect-error IGNORE ERROR
  ...configs.recommendedTypeChecked,
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
  {
    languageOptions: {
      // parserOptions: {
      //   project: true,
      //   tsconfigRootDir: import.meta.dirname,
      //   extraFileExtensions: [
      //     ".json"
      //   ],
      // },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
  {
    files: ["**/*.js"],
    ...configs.disableTypeChecked,
  }
)
