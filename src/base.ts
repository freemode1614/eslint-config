import { Linter } from "eslint";
import * as compat from "eslint-plugin-compat";
import * as import_ from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

const settings: Linter.Config["settings"] = {
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
    },
  },
  node: {
    typescriptExtensionMap: [
      ["", ".js"],
      [".ts", ".js"],
      [".cts", ".cjs"],
      [".mts", ".mjs"],
      [".tsx", ".jsx"],
    ],
  },
};

/**
 *
 * @param root0 - Options
 * @param root0.isESModule - Project is using ES module.
 * @param root0.isUsingTypescript - Project is using Typescript.
 * @param root0.isUsingReact - Project is using React.
 * @returns - Rules
 */
function customRules({
  isESModule,
  isUsingTypescript,
  isUsingReact,
}: {
  isESModule: boolean;
  isUsingTypescript: boolean;
  isUsingReact: boolean;
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
          useRef: false,
        },
      },
    ],
    "unicorn/filename-case": [
      "warn",
      {
        case: "camelCase",
        ignore: [/API/, /JSON/, /App/],
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
    // Disable no-null rule, since `null` is a valid ReactNode for function component.
    "unicorn/no-null": isUsingReact ? "off" : "warn",
    "no-case-declarations": "off",
  };
}

/**
 * @param obj0 Options
 * @param obj0.isESModule - Project is using ES module.
 * @param obj0.isUsingReact - Project is using React.
 * @param obj0.isUsingPrettier - Project is using Prettier.
 * @param obj0.isUsingTypescript - Project is using Typescript.
 * @param [obj0.extraConfig] - Extra eslint config options.
 * @returns - Legacy Eslint Config For JSON Files.
 */
export function legacy({
  isESModule,
  isUsingReact,
  isUsingPrettier,
  isUsingTypescript,
  extraConfig = {},
}: {
  isESModule: boolean;
  isUsingReact: boolean;
  isUsingPrettier: boolean;
  isUsingTypescript: boolean;
  extraConfig: Partial<Linter.Config>;
}) {
  const plugins = ["compat", "jsdoc", "n", "simple-import-sort", "unicorn"];

  const extends_ = [
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
    ignorePatterns: [
      "**/*.{css,less,stylus,pcss}",
      "**/*.d.ts",
      "**/npm/**",
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/temp/**",
    ],
    plugins,
    extends: extends_,
    settings,
    rules: customRules({ isESModule, isUsingTypescript, isUsingReact }),
    ...extraConfig,
  };

  return config;
}

/**
 * @param obj0 - Options
 * @param obj0.isESModule - Project is using ES module.
 * @param obj0.isUsingReact - Project is using React.
 * @param obj0.isUsingTypescript - Project is using Typescript.
 * @returns  - Flat Eslint Config For JSON Files.
 */
export function flat({
  isESModule,
  isUsingReact,
  isUsingTypescript,
}: {
  isESModule: boolean;
  isUsingReact: boolean;
  isUsingTypescript: boolean;
}) {
  /**
   */
  const configs = [
    {
      files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      plugins: Object.assign({
        n,
        compat,
        "simple-import-sort": simpleImportSort,
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
        customRules({ isESModule, isUsingTypescript, isUsingReact }),
      ),
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
        "**/temp/**",
      ],
    },
  ];

  return configs;
}
