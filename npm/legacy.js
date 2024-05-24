'use strict';

var path = require('path');
var fsExtra = require('fs-extra');
require('eslint-plugin-compat');
require('eslint-plugin-import');
require('eslint-plugin-jsdoc');
require('eslint-plugin-n');
require('eslint-plugin-prettier/recommended');
require('eslint-plugin-simple-import-sort');
require('eslint-plugin-unicorn');
require('eslint-plugin-jsonc');
require('eslint-plugin-jsx-a11y');
require('eslint-plugin-react');
require('eslint-plugin-react-hooks');
require('eslint-plugin-react-refresh');
require('globals');
var semver = require('semver');
require('typescript-eslint');
require('eslint-plugin-jest');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var semver__default = /*#__PURE__*/_interopDefault(semver);

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
  isESModule: isESModule2,
  isUsingTypescript: isUsingTypescript2,
  isUsingReact: isUsingReact2
}) {
  return {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "jsdoc/require-jsdoc": isUsingTypescript2 ? "off" : "warn",
    "jsdoc/require-returns": isUsingTypescript2 ? "off" : "warn",
    "jsdoc/require-returns-description": isUsingTypescript2 ? "off" : "warn",
    "jsdoc/require-param": isUsingTypescript2 ? "off" : "warn",
    "jsdoc/require-param-description": isUsingTypescript2 ? "off" : "warn",
    "jsdoc/check-param-names": isUsingTypescript2 ? "off" : "warn",
    "n/no-missing-import": "off",
    "n/no-missing-require": "off",
    // "import/no-unresolved": "off",
    // "n/no-missing-import": "off",
    "unicorn/prefer-module": isESModule2 ? "error" : "off",
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
    "unicorn/no-null": isUsingReact2 ? "off" : "warn",
    "no-case-declarations": "off"
  };
}
function legacy({
  isESModule: isESModule2,
  isUsingReact: isUsingReact2,
  isUsingPrettier: isUsingPrettier2,
  isUsingTypescript: isUsingTypescript2,
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
  if (isESModule2) {
    plugins.push("import");
    extends_.push(`plugin:import/recommended`);
    isUsingPrettier2 && extends_.push(`plugin:import/react`);
    isUsingTypescript2 && extends_.push(`plugin:import/typescript`);
  }
  if (isESModule2) {
    extends_.push(`plugin:n/recommended-module`);
  } else {
    extends_.push(`plugin:n/recommended-script`);
  }
  if (isUsingPrettier2) {
    extends_.push(`plugin:prettier/recommended`);
  } else {
    extends_.push(__require.resolve("./rules/styles.js"));
  }
  if (isUsingTypescript2) {
    extends_.push(`plugin:jsdoc/recommended-typescript`);
  } else {
    extends_.push(`plugin:jsdoc/recommended`);
  }
  const config2 = {
    env: {
      browser: true,
      worker: true,
      node: true,
      commonjs: !isESModule2,
      es6: isESModule2,
      jest: true
    },
    parserOptions: {
      sourceType: isESModule2 ? "module" : "commonjs",
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: isUsingReact2,
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
    rules: customRules({ isESModule: isESModule2, isUsingTypescript: isUsingTypescript2, isUsingReact: isUsingReact2 }),
    ...extraConfig
  };
  return config2;
}
function legacy2() {
  const config2 = {
    files: ["**/*.json"],
    plugins: ["jsonc"],
    extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"]
  };
  return config2;
}
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = fsExtra.readJSONSync(path.resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver__default.default.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var files = ["**/*.{tsx,jsx}"];
function legacy3({ isUsingTypescript: isUsingTypescript2 }) {
  const config2 = {
    // Write React in js or ts file is not recommended, so we just check jsx and tsx files.
    files,
    parser: isUsingTypescript2 ? "@typescript-eslint/parser" : void 0,
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
  return config2;
}
var files2 = ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"];
function legacy4({ isUsingJest: isUsingJest2 }) {
  const config2 = {
    files: files2,
    plugins: isUsingJest2 ? ["jest"] : [],
    extends: isUsingJest2 ? ["plugin:jest/all"] : []
  };
  return config2;
}
var files3 = ["**/*.ts", "**/*.tsx"];
function legacy5() {
  const config2 = {
    files: files3,
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"]
  };
  return config2;
}

// src/legacy.ts
var package_ = fsExtra.readJSONSync(path.resolve(process.cwd(), "package.json"), {
  throws: false
});
if (!package_) {
  throw new Error(
    "No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file."
  );
}
var {
  dependencies = {},
  //
  devDependencies = {},
  peerDependencies = {}
} = package_;
var localProjectDeps = Object.keys(Object.assign({}, dependencies, devDependencies, peerDependencies));
var isUsingReact = localProjectDeps.includes("react");
var isUsingPrettier = localProjectDeps.includes("prettier");
var isUsingTypescript = localProjectDeps.includes("typescript");
var isUsingJest = localProjectDeps.includes("jest");
var isESModule = package_.type === "module";
var overrides = [
  legacy2(),
  //
  legacy3({ isUsingTypescript }),
  legacy4({ isUsingJest })
];
if (isUsingTypescript) {
  overrides.push(legacy5());
}
var config = legacy({
  isESModule,
  isUsingPrettier,
  isUsingReact,
  isUsingTypescript,
  extraConfig: {
    overrides
  }
});
if (!process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG) {
  console.log(`config ->`, config);
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}
var legacy_default = config;

module.exports = legacy_default;
