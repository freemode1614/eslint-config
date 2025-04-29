import nodepath from "node:path";

import fs from "fs-extra";
import { type PackageJson } from "pkg-types";
import semver from "semver";

export const packageJSON = () => {
  return fs.readJSONSync(nodepath.resolve(process.cwd(), "package.json"), {
    throws: false,
  }) as PackageJson;
};

export const deps = () => {
  const package_ = packageJSON();
  const {
    dependencies = {},
    devDependencies = {},
    peerDependencies = {},
  } = package_;
  return {
    ...dependencies,
    ...devDependencies,
    ...peerDependencies,
  };
};

export const projects = () => {
  return ["./tsconfig.json", "./tsconfig.*.json"];
};

export const usingEsmodule = () => packageJSON()?.type === "module";

export const usingTypescript = () => "typescript" in deps();

export const usingReact = () => "react" in deps();

export const usingPrettier = () => "prettier" in deps();

export const usingJest = () => "jest" in deps();

export const usingVitest = () => "vitest" in deps();

export const usingJsxRuntime = () =>
  usingPrettier() &&
  semver.gt(semver.coerce(deps()?.react ?? "") ?? "0.0.0", "17.0.0");
