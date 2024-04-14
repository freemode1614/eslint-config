const { resolve } = require("node:path");

const { readJSONSync } = require("fs-extra");

const { legacy: jsonConfigGen } = require("./overrides/json.js");
const { legacy: reactConfigGen } = require("./overrides/react.js");
const { legacy: tsConfigGen } = require("./overrides/typescript.js");
const { legacy: testConfigGen } = require("./overrides/test");
const { legacy: baseConfigGen } = require("./base.js");

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

const {
  dependencies = {}, //
  devDependencies = {},
  peerDependencies = {},
} = package_;

const localProjectDeps = Object.keys(Object.assign({}, dependencies, devDependencies, peerDependencies));

const isUsingReact = localProjectDeps.includes("react");
const isUsingPrettier = localProjectDeps.includes("prettier");
const isUsingTypescript = localProjectDeps.includes("typescript");
const isUsingJest = localProjectDeps.includes("jest");

const isESModule = package_.type === "module";

/**
 * @type {import("eslint").Linter.ConfigOverride[]}
 */
const overrides = [
  jsonConfigGen(), //
  reactConfigGen({ isTypescript: isUsingTypescript }),
  testConfigGen({ isUsingJest }),
];

if (isUsingTypescript) {
  overrides.push(tsConfigGen());
}

const config = baseConfigGen({
  isESModule,
  isUsingPrettier,
  isUsingReact,
  isUsingTypescript,
  extraConfig: {
    overrides,
  },
});

if (!process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG) {
  console.log(`config ->`, config);
  console.log(`config.overrides ->`, config.overrides);
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}

module.exports = baseConfigGen({
  isESModule,
  isUsingPrettier,
  isUsingReact,
  isUsingTypescript,
  extraConfig: {
    overrides,
  },
});
