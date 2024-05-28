import { resolve } from "node:path";

import fsExtra from "fs-extra";

const { readJSONSync } = fsExtra;

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

export const isUsingReact = localProjectDeps.includes("react");
export const isUsingPrettier = localProjectDeps.includes("prettier");
export const isUsingTypescript = localProjectDeps.includes("typescript");
export const isUsingJest = localProjectDeps.includes("jest");
export const isESModule = package_.type === "module";
