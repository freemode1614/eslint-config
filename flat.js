const { resolve } = require("node:path");

const { readJSONSync } = require("fs-extra");

const { flat: jsonConfigGen } = require("./overrides/json.js");
const { flat: reactConfigGen } = require("./overrides/react.js");
const { flat: tsConfigGen } = require("./overrides/typescript.js");
const { flat: testConfigGen } = require("./overrides/test");
const { flat: baseConfigGen } = require("./base.js");

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

const isUsingReact = localProjectDeps.includes("react");
const isUsingPrettier = localProjectDeps.includes("prettier");
const isUsingTypescript = localProjectDeps.includes("typescript");

const isESModule = package_.type === "module";

console.log("isESModule ->", isESModule);

const configs = [
  ...baseConfigGen({
    isESModule,
    isUsingPrettier,
    isUsingReact,
    isUsingTypescript,
  }),
  ...jsonConfigGen(),
  ...reactConfigGen(),
  ...tsConfigGen(),
  ...testConfigGen(),
];

if (!process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG) {
  console.log(`<-------- configs -------->`);
  console.log(configs);
  console.log(`<-------- configs -------->`);
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}

module.exports = configs;