import basic from "./configs/basic.js";
import cjs from "./configs/cjs.js";
import esm from "./configs/esm.js";
import ignores from "./configs/ignores.js";
import prettier from "./configs/prettier.js";
import react from "./configs/react.js";
import test from "./configs/test.js";
import typescript from "./configs/typescript.js";
import web from "./configs/web.js";
import Env from "./env.js";

/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  ...basic,
  ...web,
  ...react,
  ...test,
  ...ignores,
  ...typescript,
  ...prettier,
  ...(Env.usingEsmodule ? esm : cjs),
];

export { config, config as default };