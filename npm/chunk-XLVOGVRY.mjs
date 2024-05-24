import * as compat from 'eslint-plugin-compat';
import * as import_ from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import n from 'eslint-plugin-n';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import jsonc from 'eslint-plugin-jsonc';
import { resolve } from 'node:path';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { readJSONSync } from 'fs-extra';
import globals from 'globals';
import semver from 'semver';
import { parser, configs } from 'typescript-eslint';
import jest from 'eslint-plugin-jest';

var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var settings = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"]
  },
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true,
      // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      project: [
        "tsconfig.json",
        //
        "packages/*/tsconfig.json"
      ]
    }
  },
  jsdoc: {
    tagNamePreference: {
      arg: "arg",
      argument: "argument",
      const: "const",
      constructor: "constructor",
      defaultvalue: "defaultvalue",
      desc: "desc",
      emits: "emits",
      exception: "exception",
      extends: "extends",
      fileoverview: "fileoverview",
      func: "func",
      host: "host",
      method: "method",
      overview: "overview",
      prop: "prop",
      return: "return",
      var: "var",
      virtual: "virtual",
      yield: "yield"
    }
  },
  node: {
    typescriptExtensionMap: [
      ["", ".js"],
      [".ts", ".js"],
      [".cts", ".cjs"],
      [".mts", ".mjs"],
      [".tsx", ".jsx"]
    ]
  }
};
function customRules({
  isESModule,
  isUsingTypescript,
  isUsingReact
}) {
  return {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "jsdoc/require-jsdoc": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-returns": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-returns-description": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-param": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-param-description": isUsingTypescript ? "off" : "warn",
    "jsdoc/check-param-names": isUsingTypescript ? "off" : "warn",
    "n/no-missing-import": "off",
    "n/no-missing-require": "off",
    // "import/no-unresolved": "off",
    // "n/no-missing-import": "off",
    "unicorn/prefer-module": isESModule ? "error" : "off",
    "unicorn/switch-case-braces": "off",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          useRef: false
        }
      }
    ],
    "unicorn/filename-case": [
      "warn",
      {
        case: "camelCase",
        ignore: [/API/, /JSON/, /App/]
      }
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
    // Disable no-null rule, since `null` is a valid ReactNode for function component.
    "unicorn/no-null": isUsingReact ? "off" : "warn",
    "no-case-declarations": "off"
  };
}
function legacy({
  isESModule,
  isUsingReact,
  isUsingPrettier,
  isUsingTypescript,
  extraConfig = {}
}) {
  const plugins = ["compat", "jsdoc", "n", "simple-import-sort", "unicorn"];
  const extends_ = [
    ...[`./rules/logic.js`, `./rules/suggestions.js`, `./rules/deprecated`].map(
      (ruleFilePath) => __require.resolve(ruleFilePath)
    ),
    `plugin:compat/recommended`,
    `plugin:unicorn/recommended`
  ];
  if (isESModule) {
    plugins.push("import");
    extends_.push(`plugin:import/recommended`);
    isUsingPrettier && extends_.push(`plugin:import/react`);
    isUsingTypescript && extends_.push(`plugin:import/typescript`);
  }
  if (isESModule) {
    extends_.push(`plugin:n/recommended-module`);
  } else {
    extends_.push(`plugin:n/recommended-script`);
  }
  if (isUsingPrettier) {
    extends_.push(`plugin:prettier/recommended`);
  } else {
    extends_.push(__require.resolve("./rules/styles.js"));
  }
  if (isUsingTypescript) {
    extends_.push(`plugin:jsdoc/recommended-typescript`);
  } else {
    extends_.push(`plugin:jsdoc/recommended`);
  }
  const config = {
    env: {
      browser: true,
      worker: true,
      node: true,
      commonjs: !isESModule,
      es6: isESModule,
      jest: true
    },
    parserOptions: {
      sourceType: isESModule ? "module" : "commonjs",
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: isUsingReact,
        impliedStrict: true,
        experimentalObjectRestSpread: true
      }
    },
    // Ignore css files and .d.ts files.
    ignorePatterns: [
      "**/*.{css,less,stylus,pcss}",
      "**/*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**"
    ],
    plugins,
    extends: extends_,
    settings,
    rules: customRules({ isESModule, isUsingTypescript, isUsingReact }),
    ...extraConfig
  };
  return config;
}
function flat({
  isESModule,
  isUsingReact,
  isUsingTypescript
}) {
  const configs4 = [
    {
      files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      plugins: Object.assign({
        n,
        compat,
        "simple-import-sort": simpleImportSort,
        import: import_,
        jsdoc,
        unicorn
      }),
      settings,
      rules: Object.assign(
        compat.configs.recommended.rules,
        unicorn.configs.recommended.rules,
        isUsingReact ? import_.configs.react.rules : {},
        isUsingTypescript ? import_.configs.typescript.rules : {},
        isESModule ? n.configs["flat/recommended-module"].rules : n.configs["flat/recommended-script"].rules,
        customRules({ isESModule, isUsingTypescript, isUsingReact })
      )
    },
    isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"] : jsdoc.configs["flat/recommended"],
    prettierRecommended,
    {
      ignores: [
        "**/*.{css,less,stylus,pcss}",
        "**/*.d.ts",
        "**/npm/**",
        "**/node_modules/**",
        "**/build/**",
        "**/dist/**",
        "**/temp/**"
      ]
    }
  ];
  return configs4;
}
function legacy2() {
  const config = {
    files: ["**/*.json"],
    plugins: ["jsonc"],
    extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"]
  };
  return config;
}
function flat2() {
  const configs4 = [
    ...jsonc.configs["flat/recommended-with-json"],
    //
    ...jsonc.configs["flat/prettier"]
  ];
  return configs4;
}
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var files = ["**/*.{tsx,jsx}"];
function legacy3({ isUsingTypescript }) {
  const config = {
    // Write React in js or ts file is not recommended, so we just check jsx and tsx files.
    files,
    parser: isUsingTypescript ? "@typescript-eslint/parser" : void 0,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
        impliedStrict: true
      }
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh"],
    extends: [
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      isReactVersionGreaterThan17 ? "plugin:react/jsx-runtime" : ""
    ].filter(Boolean),
    settings: { react: { version: "detect" } },
    rules: {
      // Force only export components from a TSX or JSX file.
      "react-refresh/only-export-components": [
        "error",
        {
          allowConstantExport: true,
          allowExportNames: [
            `action`,
            // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
            `loader`,
            // The route loader is called before the route renders and provides data for the element through useLoaderData.
            `caseSensitive`,
            // Instructs the route to match case or not.
            `index`,
            `handle`,
            `errorElement`,
            `ErrorBoundary`,
            `shouldRevalidate`
            // Using this API risks your UI getting out of sync with your data, use with caution!
          ]
        }
      ]
    }
  };
  return config;
}
function flat3() {
  const languageOptions = {
    parser: parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
        impliedStrict: true
      }
    },
    globals: {
      ...globals.serviceworker,
      ...globals.worker,
      ...globals.builtin,
      ...globals.browser
    }
  };
  const configs4 = [
    {
      plugins: {
        react,
        "react-hooks": reactHooks,
        "jsx-a11y": jsxA11y,
        "react-refresh": reactRefresh
      },
      languageOptions,
      settings: { react: { version: "detect" } }
    },
    {
      files,
      rules: Object.assign(
        {
          // reactRefresh.configs.recommended.rules,
          "react-refresh/only-export-components": [
            "error",
            {
              checkJS: false,
              allowConstantExport: true,
              allowExportNames: [
                `action`,
                // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
                `loader`,
                // The route loader is called before the route renders and provides data for the element through useLoaderData.
                `caseSensitive`,
                // Instructs the route to match case or not.
                `index`,
                `handle`,
                `errorElement`,
                `ErrorBoundary`,
                `shouldRevalidate`
                // Using this API risks your UI getting out of sync with your data, use with caution!
              ]
            }
          ]
        },
        react.configs.recommended.rules,
        reactHooks.configs.recommended.rules,
        jsxA11y.configs.recommended.rules,
        isReactVersionGreaterThan17 ? react.configs["jsx-runtime"].rules : {}
      )
    }
  ];
  return configs4;
}
var files2 = ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"];
function legacy4({ isUsingJest }) {
  const config = {
    files: files2,
    plugins: isUsingJest ? ["jest"] : [],
    extends: isUsingJest ? ["plugin:jest/all"] : []
  };
  return config;
}
function flat4({ isUsingJest }) {
  const configs4 = isUsingJest ? [
    {
      files: files2,
      ...jest.configs["flat/all"]
    }
  ] : [{ files: files2 }];
  return configs4;
}
var files3 = ["**/*.ts", "**/*.tsx"];
function legacy5() {
  const config = {
    files: files3,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"]
  };
  return config;
}
function flat5() {
  return [...configs.recommended, ...configs.stylistic].map((cfg) => {
    return {
      ...cfg,
      files: files3
    };
  });
}

export { flat, flat2, flat3, flat4, flat5, legacy, legacy2, legacy3, legacy4, legacy5 };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XLVOGVRY.mjs.map