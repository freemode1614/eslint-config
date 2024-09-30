import tseslint from "typescript-eslint";

import basic from "./configs/basic.js";
import ignores from "./configs/ignores.js";
import react from "./configs/react.js";
import test from "./configs/test.js";
import web from "./configs/web.js";
import Env from "./env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  ...basic,
  // TODO: Wait for eslint-plugin-import support eslint@9
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.recommended,
  ...web,
  ...react,
  ...test,
  ...ignores,
  {
    rules: {
      // IMPORT-SORT
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // JSDOC
      "jsdoc/tag-lines": ["error", "always", { count: 0, startLines: 1 }],

      // UNICORN
      "unicorn/prefer-module": Env.usingEsmodule ? "error" : "off",
      "unicorn/switch-case-braces": "off",
      "unicorn/prevent-abbreviations": [
        "warn",
        {
          replacements: {
            useRef: false,
            ref: false,
            props: false,
            dir: false,
            msg: false,
            dev: false,
            prod: false,
            args: false,
            req: false,
            resp: false,
            num: false,
            doc: false,
            env: false,
            envs: false,
            fn: false,
            func: false,
          },
        },
      ],
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [/^App/, /^@/, /^\$/],
        },
      ],
      "unicorn/prefer-set-has": "warn",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-push-push": "warn",
      "unicorn/prefer-export-from": "warn",
      "unicorn/no-array-for-each": "off",
      "unicorn/import-style": ["warn"],
      "unicorn/prefer-spread": "warn",
      "unicorn/no-for-loop": "warn",
      "unicorn/no-null": Env.usingReact ? "off" : "warn",

      // TYPESCRIPT
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",

      // TODO: PROJECT STRUCTURE
      // "project-structure/folder-structure": ["error", folderStructureConfig],
      // "project-structure/independent-modules": [
      //   "error",
      //   independentModulesConfig,
      // ],
      // "project-structure/naming-rules": ["error", namingRulesConfig],
    },
  },
];

export { config };
