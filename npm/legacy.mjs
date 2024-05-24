import { legacy2, legacy3, legacy4, legacy5, legacy } from './chunk-A5W4L6ZC.mjs';
import { resolve } from 'node:path';
import { readJSONSync } from 'fs-extra';

var package_ = readJSONSync(resolve(process.cwd(), "package.json"), {
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

export { legacy_default as default };
