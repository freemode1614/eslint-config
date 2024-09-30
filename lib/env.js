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
    return nodepath.resolve(process.cwd(), "tsconfig.json")
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
    return this.pkg.react && semver.satisfies(this.deps.react, ">=17")
  }
}
