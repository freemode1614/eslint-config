/* eslint-disable n/no-extraneous-import */

import type { TSESLint } from "@typescript-eslint/utils";
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
  ...configs.strict,
  ...configs.stylistic,
  ...configs.recommended,
  {
    languageOptions: {
      // parserOptions: {
      //   project: true,
      //   warnOnUnsupportedTypeScriptVersion: true,
      //   tsconfigRootDir: import.meta.dirname,
      //   extraFileExtensions: [
      //     ".json"
      //   ],
      // },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-misused-promises": ["error", {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      }],
    },
  },
  {
    files: ["**/*.js"],
    ...configs.disableTypeChecked,
  }
)
