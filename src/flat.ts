import { resolve } from "node:path";

import { readJSONSync } from "fs-extra";

import { flat as baseConfigGen } from "@/base";
import { flat as jsonConfigGen } from "@/overrides/json";
import { flat as reactConfigGen } from "@/overrides/react";
import { flat as testConfigGen } from "@/overrides/test";
import { flat as tsConfigGen } from "@/overrides/typescript";

/**
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
// const isUsingPrettier = localProjectDeps.includes("prettier");
const isUsingTypescript = localProjectDeps.includes("typescript");
const isUsingJest = localProjectDeps.includes("jest");

const isESModule = package_.type === "module";

const configs = [
  ...baseConfigGen({
    isESModule,
    // isUsingPrettier,
    isUsingReact,
    isUsingTypescript,
  }),
  ...jsonConfigGen(),
  ...reactConfigGen(),
  ...tsConfigGen(),
  ...testConfigGen({ isUsingJest }),
];

if (!process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG) {
  console.log(`<-------- configs -------->`);
  console.log(configs);
  console.log(`<-------- configs -------->`);
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}

module.exports = configs;
