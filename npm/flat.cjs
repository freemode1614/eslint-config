"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/flat.ts
var flat_exports = {};
__export(flat_exports, {
  default: () => flat_default
});
module.exports = __toCommonJS(flat_exports);

// src/flat/base.ts
var import_eslint_plugin_compat = __toESM(require("eslint-plugin-compat"), 1);
var import_eslint_plugin_jsdoc = __toESM(require("eslint-plugin-jsdoc"), 1);
var import_eslint_plugin_jsonc = __toESM(require("eslint-plugin-jsonc"), 1);
var import_eslint_plugin_n = __toESM(require("eslint-plugin-n"), 1);
var import_recommended = __toESM(require("eslint-plugin-prettier/recommended"), 1);
var import_eslint_plugin_simple_import_sort = __toESM(require("eslint-plugin-simple-import-sort"), 1);
var import_eslint_plugin_unicorn = __toESM(require("eslint-plugin-unicorn"), 1);

// src/utils.ts
var import_node_path = require("path");
var import_fs_extra = __toESM(require("fs-extra"), 1);
var { readJSONSync } = import_fs_extra.default;
var package_ = readJSONSync((0, import_node_path.resolve)(process.cwd(), "package.json"), {
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
      unicorn: import_eslint_plugin_unicorn.default,
      "simple-import-sort": import_eslint_plugin_simple_import_sort.default
    },
    settings
  },
  ...import_eslint_plugin_jsonc.default.configs["flat/recommended-with-jsonc"],
  ...import_eslint_plugin_jsonc.default.configs["flat/recommended-with-json"],
  ...import_eslint_plugin_jsonc.default.configs["flat/recommended-with-json5"],
  ...import_eslint_plugin_jsonc.default.configs["flat/prettier"],
  import_eslint_plugin_compat.default.configs["flat/recommended"],
  isESModule ? import_eslint_plugin_n.default.configs["flat/recommended-module"] : import_eslint_plugin_n.default.configs["flat/recommended-script"],
  isUsingTypescript ? import_eslint_plugin_jsdoc.default.configs["flat/recommended-typescript"] : import_eslint_plugin_jsdoc.default.configs["flat/recommended"],
  import_recommended.default,
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

// src/flat/jest.ts
var jestPlugin = __toESM(require("eslint-plugin-jest"), 1);
var jest_default = isUsingJest ? [
  {
    files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
    ...jestPlugin.configs["flat/recommended"],
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules
    }
  }
] : [];

// src/flat/json.ts
var import_eslint_plugin_jsonc2 = __toESM(require("eslint-plugin-jsonc"), 1);
var json_default = [
  ...import_eslint_plugin_jsonc2.default.configs["flat/recommended-with-json"],
  //
  ...import_eslint_plugin_jsonc2.default.configs["flat/prettier"]
];

// src/flat/react.ts
var import_node_path2 = require("path");
var import_eslint_plugin_jsx_a11y = __toESM(require("eslint-plugin-jsx-a11y"), 1);
var import_eslint_plugin_react = __toESM(require("eslint-plugin-react"), 1);
var import_eslint_plugin_react_hooks = __toESM(require("eslint-plugin-react-hooks"), 1);
var import_eslint_plugin_react_refresh = __toESM(require("eslint-plugin-react-refresh"), 1);
var import_fs_extra2 = __toESM(require("fs-extra"), 1);
var import_globals = __toESM(require("globals"), 1);
var import_semver = __toESM(require("semver"), 1);
var import_typescript_eslint = require("typescript-eslint");
var { readJSONSync: readJSONSync2 } = import_fs_extra2.default;
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync2((0, import_node_path2.resolve)(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && import_semver.default.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var reactFiles = ["**/*.{tsx,jsx}"];
var languageOptions = {
  parser: import_typescript_eslint.parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  globals: {
    ...import_globals.default.serviceworker,
    ...import_globals.default.worker,
    ...import_globals.default.builtin,
    ...import_globals.default.browser
  }
};
var configs2 = [
  {
    plugins: {
      react: import_eslint_plugin_react.default,
      "react-hooks": import_eslint_plugin_react_hooks.default,
      "jsx-a11y": import_eslint_plugin_jsx_a11y.default,
      "react-refresh": import_eslint_plugin_react_refresh.default
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
      import_eslint_plugin_react.default.configs.recommended.rules,
      import_eslint_plugin_react_hooks.default.configs.recommended.rules,
      import_eslint_plugin_jsx_a11y.default.configs.recommended.rules,
      isReactVersionGreaterThan17 ? import_eslint_plugin_react.default.configs["jsx-runtime"].rules : {}
    )
  }
];
var react_default = configs2;

// src/flat/typescript.ts
var import_typescript_eslint2 = require("typescript-eslint");
var files = ["**/*.ts", "**/*.tsx"];
var typescript_default = [...import_typescript_eslint2.configs.recommended, ...import_typescript_eslint2.configs.stylistic].map((cfg) => ({ ...cfg, files }));

// src/flat.ts
var config = [...base_default, ...jest_default, ...json_default, ...react_default, ...typescript_default];
var flat_default = config;
