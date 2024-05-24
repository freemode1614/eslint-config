import { flat, flat2, flat3, flat5, flat4 } from './chunk-A5W4L6ZC.mjs';
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
var { dependencies = {}, devDependencies = {}, peerDependencies = {} } = package_;
var localProjectDeps = Object.keys(Object.assign({}, dependencies, devDependencies, peerDependencies));
var isUsingReact = localProjectDeps.includes("react");
var isUsingTypescript = localProjectDeps.includes("typescript");
var isUsingJest = localProjectDeps.includes("jest");
var isESModule = package_.type === "module";
var configs = [
  ...flat({
    isESModule,
    // isUsingPrettier,
    isUsingReact,
    isUsingTypescript
  }),
  ...flat2(),
  ...flat3(),
  ...flat5(),
  ...flat4({ isUsingJest })
];
if (!process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG) {
  console.log(`<-------- configs -------->`);
  console.log(configs);
  console.log(`<-------- configs -------->`);
  process.env.DEBUGGER_LOG_MOCCONA_ESLINT_CONFIG = "LOGGED";
}
var flat_default = configs;

export { flat_default as default };
