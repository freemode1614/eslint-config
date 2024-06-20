'use strict';

var compat = require('eslint-plugin-compat');
var jsdoc = require('eslint-plugin-jsdoc');
var jsonc = require('eslint-plugin-jsonc');
var n = require('eslint-plugin-n');
var prettier = require('eslint-plugin-prettier/recommended');
var importSort = require('eslint-plugin-simple-import-sort');
var unicorn = require('eslint-plugin-unicorn');
var path = require('path');
var fsExtra = require('fs-extra');
var jestPlugin = require('eslint-plugin-jest');
var jsxA11y = require('eslint-plugin-jsx-a11y');
var react = require('eslint-plugin-react');
var reactHooks = require('eslint-plugin-react-hooks');
var reactRefresh = require('eslint-plugin-react-refresh');
var globals = require('globals');
var semver = require('semver');
var typescriptEslint = require('typescript-eslint');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var compat__default = /*#__PURE__*/_interopDefault(compat);
var jsdoc__default = /*#__PURE__*/_interopDefault(jsdoc);
var jsonc__default = /*#__PURE__*/_interopDefault(jsonc);
var n__default = /*#__PURE__*/_interopDefault(n);
var prettier__default = /*#__PURE__*/_interopDefault(prettier);
var importSort__default = /*#__PURE__*/_interopDefault(importSort);
var unicorn__default = /*#__PURE__*/_interopDefault(unicorn);
var fsExtra__default = /*#__PURE__*/_interopDefault(fsExtra);
var jestPlugin__namespace = /*#__PURE__*/_interopNamespace(jestPlugin);
var jsxA11y__default = /*#__PURE__*/_interopDefault(jsxA11y);
var react__default = /*#__PURE__*/_interopDefault(react);
var reactHooks__default = /*#__PURE__*/_interopDefault(reactHooks);
var reactRefresh__default = /*#__PURE__*/_interopDefault(reactRefresh);
var globals__default = /*#__PURE__*/_interopDefault(globals);
var semver__default = /*#__PURE__*/_interopDefault(semver);

// src/flat/base.ts
var { readJSONSync } = fsExtra__default.default;
var package_ = readJSONSync(path.resolve(process.cwd(), "package.json"), {
  throws: false
});
if (!package_) {
  throw new Error(
    "No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file."
  );
}
var { dependencies = {}, devDependencies = {}, peerDependencies = {} } = package_;
var localProjectDeps = Object.keys(Object.assign({}, dependencies, devDependencies, peerDependencies));
var isUsingReact = localProjectDeps.includes("react");
var isUsingPrettier = localProjectDeps.includes("prettier");
var isUsingTypescript = localProjectDeps.includes("typescript");
var isUsingJest = localProjectDeps.includes("jest");
var isESModule = package_.type === "module";
console.log(
  "isUsingReact ->",
  isUsingReact,
  "\n",
  "isUsingPrettier ->",
  isUsingPrettier,
  "\n",
  "isUsingTypescript ->",
  isUsingTypescript,
  "\n",
  "isUsingJest ->",
  isUsingJest,
  "\n",
  "isESModule ->",
  isESModule
);

// src/rules/custom.ts
var custom_default = {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  // While using typescript, should ignore below rules for JSDoc
  "jsdoc/require-jsdoc": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-returns": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-returns-description": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-param": isUsingTypescript ? "off" : "warn",
  "jsdoc/require-param-description": isUsingTypescript ? "off" : "warn",
  "jsdoc/check-param-names": isUsingTypescript ? "off" : "warn",
  // TODO: Can't setup the right configuration for this, so ignore now.
  "n/no-missing-import": "off",
  "n/no-missing-require": "off",
  // unicorn rules customization
  "unicorn/prefer-module": isESModule ? "error" : "off",
  "unicorn/switch-case-braces": "off",
  "unicorn/prevent-abbreviations": [
    "warn",
    {
      replacements: {
        useRef: {
          useReference: false
        },
        ref: {
          reference: false
        },
        props: {
          properties: false
        }
      }
    }
  ],
  "unicorn/filename-case": [
    "warn",
    {
      case: "camelCase",
      ignore: [
        /API/,
        /JSON/,
        // Entry file name for most of the scaffold
        /App/,
        // For dynamic router name prefix
        /^@/,
        // For optional router name prefix
        /^$/
      ]
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

// src/flat/base.ts
var settings = {
  // "import/parsers": {
  //   "@typescript-eslint/parser": [".ts", ".tsx"],
  // },
  // "import/resolver": {
  //   typescript: {
  //     alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //     project: [
  //       "tsconfig.json", //
  //       "packages/*/tsconfig.json",
  //     ],
  //   },
  // },
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
  }
  // node: {
  //   typescriptExtensionMap: [
  //     ["", ".js"],
  //     [".ts", ".js"],
  //     [".cts", ".cjs"],
  //     [".mts", ".mjs"],
  //     [".tsx", ".jsx"],
  //   ],
  // },
};
var base_default = [
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
    plugins: {
      unicorn: unicorn__default.default,
      "simple-import-sort": importSort__default.default
    },
    settings
  },
  ...jsonc__default.default.configs["flat/recommended-with-jsonc"],
  ...jsonc__default.default.configs["flat/recommended-with-json"],
  ...jsonc__default.default.configs["flat/recommended-with-json5"],
  ...jsonc__default.default.configs["flat/prettier"],
  compat__default.default.configs["flat/recommended"],
  isESModule ? n__default.default.configs["flat/recommended-module"] : n__default.default.configs["flat/recommended-script"],
  isUsingTypescript ? jsdoc__default.default.configs["flat/recommended-typescript"] : jsdoc__default.default.configs["flat/recommended"],
  prettier__default.default,
  {
    rules: Object.assign(custom_default)
  },
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
var jest_default = isUsingJest ? [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
    ...jestPlugin__namespace.configs["flat/recommended"],
    rules: {
      ...jestPlugin__namespace.configs["flat/recommended"].rules
    }
  }
] : [];
var json_default = [
  ...jsonc__default.default.configs["flat/recommended-with-json"],
  //
  ...jsonc__default.default.configs["flat/prettier"]
];
var { readJSONSync: readJSONSync2 } = fsExtra__default.default;
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync2(path.resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver__default.default.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var reactFiles = ["**/*.{tsx,jsx}"];
var languageOptions = {
  parser: typescriptEslint.parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  globals: {
    ...globals__default.default.serviceworker,
    ...globals__default.default.worker,
    ...globals__default.default.builtin,
    ...globals__default.default.browser
  }
};
var configs2 = [
  {
    plugins: {
      react: react__default.default,
      "react-hooks": reactHooks__default.default,
      "jsx-a11y": jsxA11y__default.default,
      "react-refresh": reactRefresh__default.default
    },
    languageOptions,
    settings: { react: { version: "detect" } }
  },
  {
    files: reactFiles,
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
      react__default.default.configs.recommended.rules,
      reactHooks__default.default.configs.recommended.rules,
      jsxA11y__default.default.configs.recommended.rules,
      isReactVersionGreaterThan17 ? react__default.default.configs["jsx-runtime"].rules : {}
    )
  }
];
var react_default = configs2;
var files = ["**/*.ts", "**/*.tsx"];
var typescript_default = [...typescriptEslint.configs.recommended, ...typescriptEslint.configs.stylistic].map((cfg) => ({ ...cfg, files }));

// src/flat.ts
var config = [...base_default, ...jest_default, ...json_default, ...react_default, ...typescript_default];
var flat_default = config;

module.exports = flat_default;
