import { e, c, f, d as d$1 } from './chunk-J7SA5GME.js';
import b from 'eslint-plugin-compat';
import p from 'eslint-plugin-jsdoc';
import t from 'eslint-plugin-jsonc';
import d from 'eslint-plugin-n';
import k from 'eslint-plugin-prettier/recommended';
import C from 'eslint-plugin-simple-import-sort';
import F from 'eslint-plugin-unicorn';
import * as s from 'eslint-plugin-jest';
import { resolve } from 'node:path';
import v from 'eslint-plugin-jsx-a11y';
import i from 'eslint-plugin-react';
import h from 'eslint-plugin-react-hooks';
import P from 'eslint-plugin-react-refresh';
import E from 'fs-extra';
import o from 'globals';
import R from 'semver';
import { parser, configs } from 'typescript-eslint';

var S={jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}}},u=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:{unicorn:F,"simple-import-sort":C},settings:S},...t.configs["flat/recommended-with-jsonc"],...t.configs["flat/recommended-with-json"],...t.configs["flat/recommended-with-json5"],...t.configs["flat/prettier"],b.configs["flat/recommended"],e?d.configs["flat/recommended-module"]:d.configs["flat/recommended-script"],c?p.configs["flat/recommended-typescript"]:p.configs["flat/recommended"],k,{rules:Object.assign(f)},{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var g=d$1?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"],...s.configs["flat/recommended"],rules:{...s.configs["flat/recommended"].rules}}]:[];var x=[...t.configs["flat/recommended-with-json"],...t.configs["flat/prettier"]];var{readJSONSync:N}=E,M=function(){try{let m=N(resolve(process.cwd(),"node_modules/react/package.json"));return !!(m&&R.satisfies(m.version,">=17"))}catch{return !1}}(),T=["**/*.{tsx,jsx}"],U={parser:parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...o.serviceworker,...o.worker,...o.builtin,...o.browser}},V=[{plugins:{react:i,"react-hooks":h,"jsx-a11y":v,"react-refresh":P},languageOptions:U,settings:{react:{version:"detect"}}},{files:T,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},i.configs.recommended.rules,h.configs.recommended.rules,v.configs.recommended.rules,M?i.configs["jsx-runtime"].rules:{})}],w=V;var _=["**/*.ts","**/*.tsx"],L=[...configs.recommended,...configs.stylistic].map(n=>({...n,files:_}));var A=[...u,...g,...x,...w,...L],Le=A;

export { Le as default };
