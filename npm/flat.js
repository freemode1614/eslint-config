import { a, c, e, f, d } from './chunk-WDEAZTCX.js';
import * as m from 'eslint-plugin-compat';
import * as t from 'eslint-plugin-import';
import i from 'eslint-plugin-jsdoc';
import n from 'eslint-plugin-n';
import C from 'eslint-plugin-prettier/recommended';
import F from 'eslint-plugin-simple-import-sort';
import g from 'eslint-plugin-unicorn';
import R from 'eslint-plugin-jest';
import v from 'eslint-plugin-jsonc';
import { resolve } from 'node:path';
import h from 'eslint-plugin-jsx-a11y';
import c$1 from 'eslint-plugin-react';
import w from 'eslint-plugin-react-hooks';
import E from 'eslint-plugin-react-refresh';
import _ from 'fs-extra';
import s from 'globals';
import P from 'semver';
import { parser, configs } from 'typescript-eslint';

var O={"import/parsers":{"@typescript-eslint/parser":[".ts",".tsx"]},"import/resolver":{typescript:{alwaysTryTypes:!0,project:["tsconfig.json","packages/*/tsconfig.json"]}},jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}},node:{typescriptExtensionMap:[["",".js"],[".ts",".js"],[".cts",".cjs"],[".mts",".mjs"],[".tsx",".jsx"]]}},j=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:Object.assign({n,compat:m,"simple-import-sort":F,import:t,jsdoc:i,unicorn:g}),settings:O,rules:Object.assign(m.configs.recommended.rules,g.configs.recommended.rules,a?t.configs.react.rules:{},c?t.configs.typescript.rules:{},e?n.configs["flat/recommended-module"].rules:n.configs["flat/recommended-script"].rules,f)},c?i.configs["flat/recommended-typescript"]:i.configs["flat/recommended"],C,{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var x=d?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"]},R.configs["flat/all"]]:[];var y=[...v.configs["flat/recommended-with-json"],...v.configs["flat/prettier"]];var{readJSONSync:J}=_,M=function(){try{let p=J(resolve(process.cwd(),"node_modules/react/package.json"));return !!(p&&P.satisfies(p.version,">=17"))}catch{return !1}}(),N=["**/*.{tsx,jsx}"],U={parser:parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...s.serviceworker,...s.worker,...s.builtin,...s.browser}},V=[{plugins:{react:c$1,"react-hooks":w,"jsx-a11y":h,"react-refresh":E},languageOptions:U,settings:{react:{version:"detect"}}},{files:N,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},c$1.configs.recommended.rules,w.configs.recommended.rules,h.configs.recommended.rules,M?c$1.configs["jsx-runtime"].rules:{})}],L=V;var A=["**/*.ts","**/*.tsx"],k=[...configs.recommended,...configs.stylistic].map(a=>({...a,files:A}));var B=[...j,...x,...y,...L,...k],Le=B;

export { Le as default };
