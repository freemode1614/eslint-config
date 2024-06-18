'use strict';

var z = require('eslint-plugin-prettier/recommended');
var f = require('eslint-plugin-compat');
var i = require('eslint-plugin-import');
var p = require('eslint-plugin-jsdoc');
var m = require('eslint-plugin-n');
var J = require('eslint-plugin-simple-import-sort');
var j = require('eslint-plugin-unicorn');
var path = require('path');
var U = require('fs-extra');
var q = require('eslint-plugin-jest');
var y = require('eslint-plugin-jsonc');
var h = require('eslint-plugin-jsx-a11y');
var l = require('eslint-plugin-react');
var k = require('eslint-plugin-react-hooks');
var N = require('eslint-plugin-react-refresh');
var n = require('globals');
var A = require('semver');
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

var z__default = /*#__PURE__*/_interopDefault(z);
var f__namespace = /*#__PURE__*/_interopNamespace(f);
var i__namespace = /*#__PURE__*/_interopNamespace(i);
var p__default = /*#__PURE__*/_interopDefault(p);
var m__default = /*#__PURE__*/_interopDefault(m);
var J__default = /*#__PURE__*/_interopDefault(J);
var j__default = /*#__PURE__*/_interopDefault(j);
var U__default = /*#__PURE__*/_interopDefault(U);
var q__default = /*#__PURE__*/_interopDefault(q);
var y__default = /*#__PURE__*/_interopDefault(y);
var h__default = /*#__PURE__*/_interopDefault(h);
var l__default = /*#__PURE__*/_interopDefault(l);
var k__default = /*#__PURE__*/_interopDefault(k);
var N__default = /*#__PURE__*/_interopDefault(N);
var n__default = /*#__PURE__*/_interopDefault(n);
var A__default = /*#__PURE__*/_interopDefault(A);

var{readJSONSync:E}=U__default.default,c=E(path.resolve(process.cwd(),"package.json"),{throws:!1});if(!c)throw new Error("No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.");var{dependencies:O={},devDependencies:C={},peerDependencies:F={}}=c,t=Object.keys(Object.assign({},O,C,F)),s=t.includes("react"),P=t.includes("prettier"),e=t.includes("typescript"),a=t.includes("jest"),o=c.type==="module";console.log("isUsingReact ->",s,`
`,"isUsingPrettier ->",P,`
`,"isUsingTypescript ->",e,`
`,"isUsingJest ->",a,`
`,"isESModule ->",o);var g={"simple-import-sort/imports":"error","simple-import-sort/exports":"error","jsdoc/require-jsdoc":e?"off":"warn","jsdoc/require-returns":e?"off":"warn","jsdoc/require-returns-description":e?"off":"warn","jsdoc/require-param":e?"off":"warn","jsdoc/require-param-description":e?"off":"warn","jsdoc/check-param-names":e?"off":"warn","n/no-missing-import":"off","n/no-missing-require":"off","unicorn/prefer-module":o?"error":"off","unicorn/switch-case-braces":"off","unicorn/prevent-abbreviations":["warn",{replacements:{useRef:!1}}],"unicorn/filename-case":["warn",{case:"camelCase",ignore:[/API/,/JSON/,/App/,/^@/,/^$/]}],"unicorn/prefer-set-has":"warn","unicorn/prefer-string-replace-all":"off","unicorn/no-array-callback-reference":"off","unicorn/no-array-push-push":"warn","unicorn/prefer-export-from":"warn","unicorn/no-array-for-each":"off","unicorn/import-style":["warn"],"unicorn/prefer-spread":"warn","unicorn/no-for-loop":"warn","unicorn/no-null":s?"off":"warn","no-case-declarations":"off"};var T={"import/parsers":{"@typescript-eslint/parser":[".ts",".tsx"]},"import/resolver":{typescript:{alwaysTryTypes:!0,project:["tsconfig.json","packages/*/tsconfig.json"]}},jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}},node:{typescriptExtensionMap:[["",".js"],[".ts",".js"],[".cts",".cjs"],[".mts",".mjs"],[".tsx",".jsx"]]}},x=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:Object.assign({n:m__default.default,compat:f__namespace,"simple-import-sort":J__default.default,import:i__namespace,jsdoc:p__default.default,unicorn:j__default.default}),settings:T,rules:Object.assign(f__namespace.configs.recommended.rules,j__default.default.configs.recommended.rules,s?i__namespace.configs.react.rules:{},e?i__namespace.configs.typescript.rules:{},o?m__default.default.configs["flat/recommended-module"].rules:m__default.default.configs["flat/recommended-script"].rules,e?p__default.default.configs["flat/recommended-typescript"].rules:p__default.default.configs["flat/recommended"],g)},{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var w=a?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"]},q__default.default.configs["flat/all"]]:[];var v=[...y__default.default.configs["flat/recommended-with-json"],...y__default.default.configs["flat/prettier"]];var{readJSONSync:I}=U__default.default,V=function(){try{let d=I(path.resolve(process.cwd(),"node_modules/react/package.json"));return !!(d&&A__default.default.satisfies(d.version,">=17"))}catch{return !1}}(),B=["**/*.{tsx,jsx}"],G={parser:typescriptEslint.parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...n__default.default.serviceworker,...n__default.default.worker,...n__default.default.builtin,...n__default.default.browser}},H=[{plugins:{react:l__default.default,"react-hooks":k__default.default,"jsx-a11y":h__default.default,"react-refresh":N__default.default},languageOptions:G,settings:{react:{version:"detect"}}},{files:B,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},l__default.default.configs.recommended.rules,k__default.default.configs.recommended.rules,h__default.default.configs.recommended.rules,V?l__default.default.configs["jsx-runtime"].rules:{})}],b=H;var $=["**/*.ts","**/*.tsx"],R=[...typescriptEslint.configs.recommended,...typescriptEslint.configs.stylistic].map(u=>({...u,files:$}));var K=[...x,...w,...v,...b,...R,z__default.default],Ne=K;

module.exports = Ne;
