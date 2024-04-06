const { resolve } = require("node:path");

const { readJSONSync } = require("fs-extra");
const semver = require("semver");

const jsonOverride = require("./overrides/json.js");
const reactOverride = require("./overrides/react.js");
const tsOverride = require("./overrides/typescript.js");

/**
 * @type {import("pkg-types").PackageJson}
 */
const package_ = readJSONSync(resolve(process.cwd(), "package.json"), {
  throws: false,
});

if (!package_) {
  throw new Error(
    "No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.",
  );
}

const { dependencies = {}, devDependencies = {}, peerDependencies = {} } = package_;

const localProjectDeps = Object.keys(Object.assign({}, dependencies, devDependencies, peerDependencies));

const isReactProject = localProjectDeps.includes("react");
const isUsingPrettier = localProjectDeps.includes("prettier");
const isUsingTypescript = localProjectDeps.includes("typescript");

const isESModule = package_.type === "module";

/**
 * @type {import("eslint").Linter.ConfigOverride[]}
 */
const overrides = [jsonOverride];

if (isUsingTypescript) {
  overrides.push(tsOverride);
}

if (isReactProject) {
  try {
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    if (reactPackage && semver.satisfies(reactPackage.version, ">=17")) {
      reactOverride.extends.push("plugin:react/jsx-runtime");
    }
  } catch (error) {
    console.error(error);
  }

  overrides.push(reactOverride);
}

const plugins = ["compat", "import", "jsdoc", "n", "simple-import-sort", "unicorn"];

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
  },
  parser: isUsingTypescript ? "@typescript-eslint/parser" : undefined,
  parserOptions: {
    sourceType: isESModule ? "module" : "commonjs",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: isReactProject,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  // Ignore css files and .d.ts files.
  ignorePatterns: ["**/*.(css|less|stylus|pcss)", "**/*.d.ts", "node_modules/**/*"],
  overrides,
  plugins,
  /**
   * import enabled by default, prettier enabled when project has prettier devDependency
   */
  extends: [
    "./rules/logic",
    "./rules/styles",
    "./rules/suggestions",
    "./rules/deprecated",
    "plugin:import/recommended",
    "plugin:compat/recommended",
    "plugin:n/recommended",
    "plugin:unicorn/recommended",
    isUsingTypescript ? "plugin:jsdoc/recommended-typescript" : "plugin:jsdoc/recommended",
    isUsingPrettier ? "plugin:prettier/recommended" : "",
  ].filter(Boolean),
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unicorn/prefer-module": isESModule ? "error" : "off",
  },
};

module.exports = config;
