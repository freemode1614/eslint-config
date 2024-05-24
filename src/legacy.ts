import { resolve } from "node:path";

import { readJSONSync } from "fs-extra";

import { legacy as baseConfigGen } from "@/base.js";
import { legacy as jsonConfigGen } from "@/overrides/json.js";
import { legacy as reactConfigGen } from "@/overrides/react.js";
import { legacy as testConfigGen } from "@/overrides/test";
import { legacy as tsConfigGen } from "@/overrides/typescript.js";

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
 */
const overrides = [
  jsonConfigGen(), //
  reactConfigGen({ isUsingTypescript }),
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
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}

export default config;
