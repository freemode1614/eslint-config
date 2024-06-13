'use strict';

var f = require('eslint-plugin-compat');
var i = require('eslint-plugin-import');
var p = require('eslint-plugin-jsdoc');
var m = require('eslint-plugin-n');
var J = require('eslint-plugin-prettier/recommended');
var T = require('eslint-plugin-simple-import-sort');
var j = require('eslint-plugin-unicorn');
var path = require('path');
var U = require('fs-extra');
var M = require('eslint-plugin-jest');
var y = require('eslint-plugin-jsonc');
var h = require('eslint-plugin-jsx-a11y');
var l = require('eslint-plugin-react');
var k = require('eslint-plugin-react-hooks');
var _ = require('eslint-plugin-react-refresh');
var n = require('globals');
var D = require('semver');
var typescriptEslint = require('typescript-eslint');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var f__namespace = /*#__PURE__*/_interopNamespace(f);
var i__namespace = /*#__PURE__*/_interopNamespace(i);
var p__default = /*#__PURE__*/_interopDefault(p);
var m__default = /*#__PURE__*/_interopDefault(m);
var J__default = /*#__PURE__*/_interopDefault(J);
var T__default = /*#__PURE__*/_interopDefault(T);
var j__default = /*#__PURE__*/_interopDefault(j);
var U__default = /*#__PURE__*/_interopDefault(U);
var M__default = /*#__PURE__*/_interopDefault(M);
var y__default = /*#__PURE__*/_interopDefault(y);
var h__default = /*#__PURE__*/_interopDefault(h);
var l__default = /*#__PURE__*/_interopDefault(l);
var k__default = /*#__PURE__*/_interopDefault(k);
var ___default = /*#__PURE__*/_interopDefault(_);
var n__default = /*#__PURE__*/_interopDefault(n);
var D__default = /*#__PURE__*/_interopDefault(D);

var{readJSONSync:E}=U__default.default,c=E(path.resolve(process.cwd(),"package.json"),{throws:!1});if(!c)throw new Error("No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.");var{dependencies:O={},devDependencies:C={},peerDependencies:F={}}=c,t=Object.keys(Object.assign({},O,C,F)),s=t.includes("react"),P=t.includes("prettier"),e=t.includes("typescript"),a=t.includes("jest"),o=c.type==="module";console.log("isUsingReact ->",s,`
`,"isUsingPrettier ->",P,`
`,"isUsingTypescript ->",e,`
`,"isUsingJest ->",a,`
`,"isESModule ->",o);var g={"simple-import-sort/imports":"error","simple-import-sort/exports":"error","jsdoc/require-jsdoc":e?"off":"warn","jsdoc/require-returns":e?"off":"warn","jsdoc/require-returns-description":e?"off":"warn","jsdoc/require-param":e?"off":"warn","jsdoc/require-param-description":e?"off":"warn","jsdoc/check-param-names":e?"off":"warn","n/no-missing-import":"off","n/no-missing-require":"off","unicorn/prefer-module":o?"error":"off","unicorn/switch-case-braces":"off","unicorn/prevent-abbreviations":["warn",{replacements:{useRef:!1}}],"unicorn/filename-case":["warn",{case:"camelCase",ignore:[/API/,/JSON/,/App/]}],"unicorn/prefer-set-has":"warn","unicorn/prefer-string-replace-all":"off","unicorn/no-array-callback-reference":"off","unicorn/no-array-push-push":"warn","unicorn/prefer-export-from":"warn","unicorn/no-array-for-each":"off","unicorn/import-style":["warn"],"unicorn/prefer-spread":"warn","unicorn/no-for-loop":"warn","unicorn/no-null":s?"off":"warn","no-case-declarations":"off"};var q={"import/parsers":{"@typescript-eslint/parser":[".ts",".tsx"]},"import/resolver":{typescript:{alwaysTryTypes:!0,project:["tsconfig.json","packages/*/tsconfig.json"]}},jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}},node:{typescriptExtensionMap:[["",".js"],[".ts",".js"],[".cts",".cjs"],[".mts",".mjs"],[".tsx",".jsx"]]}},x=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:Object.assign({n:m__default.default,compat:f__namespace,"simple-import-sort":T__default.default,import:i__namespace,jsdoc:p__default.default,unicorn:j__default.default}),settings:q,rules:Object.assign(f__namespace.configs.recommended.rules,j__default.default.configs.recommended.rules,s?i__namespace.configs.react.rules:{},e?i__namespace.configs.typescript.rules:{},o?m__default.default.configs["flat/recommended-module"].rules:m__default.default.configs["flat/recommended-script"].rules,g)},e?p__default.default.configs["flat/recommended-typescript"]:p__default.default.configs["flat/recommended"],J__default.default,{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var w=a?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"]},M__default.default.configs["flat/all"]]:[];var v=[...y__default.default.configs["flat/recommended-with-json"],...y__default.default.configs["flat/prettier"]];var{readJSONSync:V}=U__default.default,B=function(){try{let d=V(path.resolve(process.cwd(),"node_modules/react/package.json"));return !!(d&&D__default.default.satisfies(d.version,">=17"))}catch{return !1}}(),G=["**/*.{tsx,jsx}"],H={parser:typescriptEslint.parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...n__default.default.serviceworker,...n__default.default.worker,...n__default.default.builtin,...n__default.default.browser}},z=[{plugins:{react:l__default.default,"react-hooks":k__default.default,"jsx-a11y":h__default.default,"react-refresh":___default.default},languageOptions:H,settings:{react:{version:"detect"}}},{files:G,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},l__default.default.configs.recommended.rules,k__default.default.configs.recommended.rules,h__default.default.configs.recommended.rules,B?l__default.default.configs["jsx-runtime"].rules:{})}],b=z;var K=["**/*.ts","**/*.tsx"],R=[...typescriptEslint.configs.recommended,...typescriptEslint.configs.stylistic].map(u=>({...u,files:K}));var Q=[...x,...w,...v,...b,...R],Ne=Q;

module.exports = Ne;
