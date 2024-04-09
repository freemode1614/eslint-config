// @ts-nocheck: ignore this file

const json = require("eslint-plugin-json");
const compat = require("eslint-plugin-compat");
const import_ = require("eslint-plugin-import");
const jsdoc = require("eslint-plugin-jsdoc");
const n = require("eslint-plugin-n");
const importSort = require("eslint-plugin-simple-import-sort");
const unicorn = require("eslint-plugin-unicorn");
const prettierRecommended = require("eslint-plugin-prettier/recommended");

const settings = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    typescript: {
      alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      project: [
        "tsconfig.json", //
        "packages/*/tsconfig.json",
      ],
    },
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
      yield: "yield",
      return: "return",
    },
  },
  node: {
    "typescriptExtensionMap": [
      ["", ".js"],
      [".ts", ".js"],
      [".cts", ".cjs"],
      [".mts", ".mjs"],
      [".tsx", ".jsx"],
    ]
  }
};

/**
 *
 * @param {object} root0 - Options
 * @param {boolean} root0.isESModule - Project is using ES module.
 * @param {boolean} root0.isUsingTypescript - Project is using Typescript.
 * @returns {import("eslint").Linter.RulesRecord} - Rules
 */
function customRules({ isESModule, isUsingTypescript }) {
  return {
    "import-sort/imports": "error",
    "import-sort/exports": "error",
    "jsdoc/require-jsdoc": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-returns": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-param": isUsingTypescript ? "off" : "warn",
    "jsdoc/require-param-description": isUsingTypescript ? "off" : "warn",
    "jsdoc/check-param-names": isUsingTypescript ? "off" : "warn",

    "n/no-missing-import": "off",
    "n/no-missing-require": "off",

    // "import/no-unresolved": "off",
    // "n/no-missing-import": "off",
    "unicorn/filename-case": "warn",
    "unicorn/prefer-module": isESModule ? "error" : "off",
    "unicorn/switch-case-braces": "off",
    "unicorn/prevent-abbreviations": ["warn", {
      "replacements": {
        "useRef": false
      }
    }],
    "unicorn/filename-case": ["error", {
      case: "camelCase"
    }]
  };
}

/**
 * @param {object} obj0 Options
 * @param {boolean} obj0.isESModule - Project is using ES module.
 * @param {boolean} obj0.isUsingReact - Project is using React.
 * @param {boolean} obj0.isUsingPrettier - Project is using Prettier.
 * @param {boolean} obj0.isUsingTypescript - Project is using Typescript.
 * @param {Partial<import("eslint").Linter.Config>} [obj0.extraConfig] - Extra eslint config options.
 * @returns {import("eslint").Linter.Config} - Legacy Eslint Config For JSON Files.
 */
function baseEslintConfigGen({ isESModule, isUsingReact, isUsingPrettier, isUsingTypescript, extraConfig = {} }) {
  const plugins = ["compat", "jsdoc", "n", "simple-import-sort", "unicorn", "jest"];

  let extends_ = [
    ...[`./rules/logic.js`, `./rules/suggestions.js`, `./rules/deprecated`].map((ruleFilePath) =>
      require.resolve(ruleFilePath),
    ),
    `plugin:compat/recommended`,
    `plugin:unicorn/recommended`,
  ];

  if (isESModule) {
    // This plugin intends to support linting of ES2015+ (ES6+) import/export syntax,
    // and prevent issues with misspelling of file paths and import names.
    // All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.
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
    extends_.push(require.resolve("./rules/styles.js"));
  }

  if (isUsingTypescript) {
    extends_.push(`plugin:jsdoc/recommended-typescript`);
  } else {
    extends_.push(`plugin:jsdoc/recommended`);
  }

  /**
   * @type {import("eslint").Linter.Config}
   */
  const config = {
    env: {
      browser: true,
      worker: true,
      node: true,
      commonjs: !isESModule,
      es6: isESModule,
      jest: true,
    },
    parserOptions: {
      sourceType: isESModule ? "module" : "commonjs",
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: isUsingReact,
        impliedStrict: true,
        experimentalObjectRestSpread: true,
      },
    },
    // Ignore css files and .d.ts files.
    ignorePatterns: ["**/*.{css,less,stylus,pcss}", "**/*.d.ts"],
    plugins,
    extends: extends_,
    settings,
    rules: customRules({ isESModule, isUsingTypescript }),
    ...extraConfig,
  };

  return config;
}

/**
 * @param {object} obj0 - Options
 * @param {boolean} obj0.isESModule - Project is using ES module.
 * @param {boolean} obj0.isUsingReact - Project is using React.
 * @param {boolean} obj0._ - Project is using Prettier.
 * @param {boolean} obj0.isUsingTypescript - Project is using Typescript.
 * @returns {import("eslint").Linter.FlatConfig[]}  - Flat Eslint Config For JSON Files.
 */
function baseESLintFlatConfigGen({ isESModule, isUsingReact, _, isUsingTypescript }) {
  /**
   * @type {import("eslint").Linter.FlatConfig[]}
   */
  const configs = [
    {
      files: ["*.json"],
      plugins: { json },
      rules: {
        ...json.configs["recommended-with-comments"].rules,
      },
    },
    {
      files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      plugins: Object.assign({
        n,
        compat,
        "import-sort": importSort,
        import: import_,
        jsdoc,
        unicorn,
      }),
      settings,
      rules: Object.assign(
        compat.configs.recommended.rules,
        unicorn.configs.recommended.rules,
        isUsingReact ? import_.configs.react.rules : {},
        isUsingTypescript ? import_.configs.typescript.rules : {},
        isESModule ? n.configs["flat/recommended-module"].rules : n.configs["flat/recommended-script"].rules,
        customRules({ isESModule, isUsingTypescript }),
      ),
    },
    isUsingTypescript ? jsdoc.configs["flat/recommended-typescript"] : jsdoc.configs["flat/recommended"],
    prettierRecommended,
  ];

  return configs;
}

module.exports = {
  legacy: baseEslintConfigGen,
  flat: baseESLintFlatConfigGen,
};
