'use strict';

var m = require('eslint-plugin-compat');
var n = require('eslint-plugin-import');
var a = require('eslint-plugin-jsdoc');
var p = require('eslint-plugin-n');
var P = require('eslint-plugin-prettier/recommended');
var q = require('eslint-plugin-simple-import-sort');
var j = require('eslint-plugin-unicorn');
var path = require('path');
var O = require('fs-extra');
var N = require('eslint-plugin-jest');
var y = require('eslint-plugin-jsonc');
var h = require('eslint-plugin-jsx-a11y');
var f = require('eslint-plugin-react');
var k = require('eslint-plugin-react-hooks');
var _ = require('eslint-plugin-react-refresh');
var i = require('globals');
var M = require('semver');
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

var m__namespace = /*#__PURE__*/_interopNamespace(m);
var n__namespace = /*#__PURE__*/_interopNamespace(n);
var a__default = /*#__PURE__*/_interopDefault(a);
var p__default = /*#__PURE__*/_interopDefault(p);
var P__default = /*#__PURE__*/_interopDefault(P);
var q__default = /*#__PURE__*/_interopDefault(q);
var j__default = /*#__PURE__*/_interopDefault(j);
var O__default = /*#__PURE__*/_interopDefault(O);
var N__default = /*#__PURE__*/_interopDefault(N);
var y__default = /*#__PURE__*/_interopDefault(y);
var h__default = /*#__PURE__*/_interopDefault(h);
var f__default = /*#__PURE__*/_interopDefault(f);
var k__default = /*#__PURE__*/_interopDefault(k);
var ___default = /*#__PURE__*/_interopDefault(_);
var i__default = /*#__PURE__*/_interopDefault(i);
var M__default = /*#__PURE__*/_interopDefault(M);

var{readJSONSync:E}=O__default.default,c=E(path.resolve(process.cwd(),"package.json"),{throws:!1});if(!c)throw new Error("No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.");var {dependencies:C={},devDependencies:F={},peerDependencies:U={}}=c,o=Object.keys(Object.assign({},C,F,U)),s=o.includes("react");o.includes("prettier");var e=o.includes("typescript"),d=o.includes("jest"),t=c.type==="module";var g={"simple-import-sort/imports":"error","simple-import-sort/exports":"error","jsdoc/require-jsdoc":e?"off":"warn","jsdoc/require-returns":e?"off":"warn","jsdoc/require-returns-description":e?"off":"warn","jsdoc/require-param":e?"off":"warn","jsdoc/require-param-description":e?"off":"warn","jsdoc/check-param-names":e?"off":"warn","n/no-missing-import":"off","n/no-missing-require":"off","unicorn/prefer-module":t?"error":"off","unicorn/switch-case-braces":"off","unicorn/prevent-abbreviations":["warn",{replacements:{useRef:!1}}],"unicorn/filename-case":["warn",{case:"camelCase",ignore:[/API/,/JSON/,/App/]}],"unicorn/prefer-set-has":"warn","unicorn/prefer-string-replace-all":"off","unicorn/no-array-callback-reference":"off","unicorn/no-array-push-push":"warn","unicorn/prefer-export-from":"warn","unicorn/no-array-for-each":"off","unicorn/import-style":["warn"],"unicorn/prefer-spread":"warn","unicorn/no-for-loop":"warn","unicorn/no-null":s?"off":"warn","no-case-declarations":"off"};var J={"import/parsers":{"@typescript-eslint/parser":[".ts",".tsx"]},"import/resolver":{typescript:{alwaysTryTypes:!0,project:["tsconfig.json","packages/*/tsconfig.json"]}},jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}},node:{typescriptExtensionMap:[["",".js"],[".ts",".js"],[".cts",".cjs"],[".mts",".mjs"],[".tsx",".jsx"]]}},x=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:Object.assign({n:p__default.default,compat:m__namespace,"simple-import-sort":q__default.default,import:n__namespace,jsdoc:a__default.default,unicorn:j__default.default}),settings:J,rules:Object.assign(m__namespace.configs.recommended.rules,j__default.default.configs.recommended.rules,s?n__namespace.configs.react.rules:{},e?n__namespace.configs.typescript.rules:{},t?p__default.default.configs["flat/recommended-module"].rules:p__default.default.configs["flat/recommended-script"].rules,g)},e?a__default.default.configs["flat/recommended-typescript"]:a__default.default.configs["flat/recommended"],P__default.default,{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var w=d?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"]},N__default.default.configs["flat/all"]]:[];var v=[...y__default.default.configs["flat/recommended-with-json"],...y__default.default.configs["flat/prettier"]];var{readJSONSync:I}=O__default.default,V=function(){try{let u=I(path.resolve(process.cwd(),"node_modules/react/package.json"));return !!(u&&M__default.default.satisfies(u.version,">=17"))}catch{return !1}}(),B=["**/*.{tsx,jsx}"],G={parser:typescriptEslint.parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...i__default.default.serviceworker,...i__default.default.worker,...i__default.default.builtin,...i__default.default.browser}},H=[{plugins:{react:f__default.default,"react-hooks":k__default.default,"jsx-a11y":h__default.default,"react-refresh":___default.default},languageOptions:G,settings:{react:{version:"detect"}}},{files:B,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},f__default.default.configs.recommended.rules,k__default.default.configs.recommended.rules,h__default.default.configs.recommended.rules,V?f__default.default.configs["jsx-runtime"].rules:{})}],b=H;var z=["**/*.ts","**/*.tsx"],R=[...typescriptEslint.configs.recommended,...typescriptEslint.configs.stylistic].map(l=>({...l,files:z}));var Te=[...x,...w,...v,...b,...R];

module.exports = Te;
