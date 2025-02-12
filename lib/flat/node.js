import basic from "../configs/basic.js";
import cjs from "../configs/cjs.js";
import esm from "../configs/esm.js";
import ignores from "../configs/ignores.js";
import prettier from "../configs/prettier.js";
import test from "../configs/test.js";
import typescript from "../configs/typescript.js";
import Env from "../env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  ...basic,
  ...test,
  ...prettier,
  ...(Env.usingEsmodule ? esm : cjs),
  ...ignores,
  ...typescript,
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaVersion: "latest",
  //       projectService: true,
  //       project: Env.tsconfigPath,
  //       ecmaFeatures: {
  //         jsx: false,
  //         experimentalObjectRestSpread: true,
  //         impliedStrict: true,
  //       },
  //     },
  //   },
  // },
];

export { config, config as default };
