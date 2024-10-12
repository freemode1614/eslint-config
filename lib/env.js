/* eslint-disable @typescript-eslint/no-extraneous-class */
import nodepath from "node:path"

import fs from "fs-extra";
import semver from "semver"

export default class Env {
  static get pkg() {
    return fs.readJSONSync(nodepath.resolve(process.cwd(), "package.json"), {
      throws: false,
    }) ?? {};
  }

  static get deps() {
    const { dependencies = {},
      devDependencies = {},
      peerDependencies = {}, } = this.pkg;
    return {
      ...dependencies, devDependencies, peerDependencies
    }
  }

  static get usingEsmodule() {
    return this.pkg.type === "module";
  }

  static get tsconfigPath() {
    return [
      "./tsconfig.json", "./tsconfig.*.json"
    ]
  }

  static get usingTypescript() {
    const deps = this.deps;
    return "typescript" in deps;
  }

  static get usingPrettier() {
    const deps = this.deps;
    return "prettier" in deps;
  }

  static get usingReact() {
    const deps = this.deps;
    return "react" in deps;
  }

  static get usingJsxRuntime() {
    if (!this.deps.react) {
      return false;
    }
    return semver.gt(semver.coerce(this.deps.react).raw, "17.0.0")
  }
}
