'use strict';

var F = require('eslint-plugin-compat');
var u = require('eslint-plugin-jsdoc');
var t = require('eslint-plugin-jsonc');
var g = require('eslint-plugin-n');
var J = require('eslint-plugin-prettier/recommended');
var q = require('eslint-plugin-simple-import-sort');
var N = require('eslint-plugin-unicorn');
var path = require('path');
var R = require('fs-extra');
var f = require('eslint-plugin-jest');
var v = require('eslint-plugin-jsx-a11y');
var m = require('eslint-plugin-react');
var y = require('eslint-plugin-react-hooks');
var A = require('eslint-plugin-react-refresh');
var n = require('globals');
var _ = require('semver');
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

var F__default = /*#__PURE__*/_interopDefault(F);
var u__default = /*#__PURE__*/_interopDefault(u);
var t__default = /*#__PURE__*/_interopDefault(t);
var g__default = /*#__PURE__*/_interopDefault(g);
var J__default = /*#__PURE__*/_interopDefault(J);
var q__default = /*#__PURE__*/_interopDefault(q);
var N__default = /*#__PURE__*/_interopDefault(N);
var R__default = /*#__PURE__*/_interopDefault(R);
var f__namespace = /*#__PURE__*/_interopNamespace(f);
var v__default = /*#__PURE__*/_interopDefault(v);
var m__default = /*#__PURE__*/_interopDefault(m);
var y__default = /*#__PURE__*/_interopDefault(y);
var A__default = /*#__PURE__*/_interopDefault(A);
var n__default = /*#__PURE__*/_interopDefault(n);
var ___default = /*#__PURE__*/_interopDefault(_);

var{readJSONSync:P}=R__default.default,i=P(path.resolve(process.cwd(),"package.json"),{throws:!1});if(!i)throw new Error("No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.");var{dependencies:U={},devDependencies:E={},peerDependencies:O={}}=i,s=Object.keys(Object.assign({},U,E,O)),c=s.includes("react"),C=s.includes("prettier"),e=s.includes("typescript"),a=s.includes("jest"),o=i.type==="module";console.log("isUsingReact ->",c,`
`,"isUsingPrettier ->",C,`
`,"isUsingTypescript ->",e,`
`,"isUsingJest ->",a,`
`,"isESModule ->",o);var d={"simple-import-sort/imports":"error","simple-import-sort/exports":"error","jsdoc/require-jsdoc":e?"off":"warn","jsdoc/require-returns":e?"off":"warn","jsdoc/require-returns-description":e?"off":"warn","jsdoc/require-param":e?"off":"warn","jsdoc/require-param-description":e?"off":"warn","jsdoc/check-param-names":e?"off":"warn","n/no-missing-import":"off","n/no-missing-require":"off","unicorn/prefer-module":o?"error":"off","unicorn/switch-case-braces":"off","unicorn/prevent-abbreviations":["warn",{replacements:{useRef:{useReference:!1},ref:{reference:!1},props:{properties:!1}}}],"unicorn/filename-case":["warn",{case:"camelCase",ignore:[/API/,/JSON/,/App/,/^@/,/^$/]}],"unicorn/prefer-set-has":"warn","unicorn/prefer-string-replace-all":"off","unicorn/no-array-callback-reference":"off","unicorn/no-array-push-push":"warn","unicorn/prefer-export-from":"warn","unicorn/no-array-for-each":"off","unicorn/import-style":["warn"],"unicorn/prefer-spread":"warn","unicorn/no-for-loop":"warn","unicorn/no-null":c?"off":"warn","no-case-declarations":"off"};var M={jsdoc:{tagNamePreference:{arg:"arg",argument:"argument",const:"const",constructor:"constructor",defaultvalue:"defaultvalue",desc:"desc",emits:"emits",exception:"exception",extends:"extends",fileoverview:"fileoverview",func:"func",host:"host",method:"method",overview:"overview",prop:"prop",return:"return",var:"var",virtual:"virtual",yield:"yield"}}},j=[{files:["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],plugins:{unicorn:N__default.default,"simple-import-sort":q__default.default},settings:M},...t__default.default.configs["flat/recommended-with-jsonc"],...t__default.default.configs["flat/recommended-with-json"],...t__default.default.configs["flat/recommended-with-json5"],...t__default.default.configs["flat/prettier"],F__default.default.configs["flat/recommended"],o?g__default.default.configs["flat/recommended-module"]:g__default.default.configs["flat/recommended-script"],e?u__default.default.configs["flat/recommended-typescript"]:u__default.default.configs["flat/recommended"],J__default.default,{rules:Object.assign(d)},{ignores:["**/*.{css,less,stylus,pcss}","**/*.d.ts","**/npm/**","**/node_modules/**","**/build/**","**/dist/**","**/temp/**"]}];var x=a?[{files:["**/*.{spec,test}.{js,ts,jsx,tsx}","tests?/*.{js,ts,jsx,tsx}"],...f__namespace.configs["flat/recommended"],rules:{...f__namespace.configs["flat/recommended"].rules}}]:[];var h=[...t__default.default.configs["flat/recommended-with-json"],...t__default.default.configs["flat/prettier"]];var{readJSONSync:B}=R__default.default,G=function(){try{let l=B(path.resolve(process.cwd(),"node_modules/react/package.json"));return !!(l&&___default.default.satisfies(l.version,">=17"))}catch{return !1}}(),H=["**/*.{tsx,jsx}"],I={parser:typescriptEslint.parser,parserOptions:{ecmaFeatures:{jsx:!0,experimentalObjectRestSpread:!0,impliedStrict:!0}},globals:{...n__default.default.serviceworker,...n__default.default.worker,...n__default.default.builtin,...n__default.default.browser}},$=[{plugins:{react:m__default.default,"react-hooks":y__default.default,"jsx-a11y":v__default.default,"react-refresh":A__default.default},languageOptions:I,settings:{react:{version:"detect"}}},{files:H,rules:Object.assign({"react-refresh/only-export-components":["error",{checkJS:!1,allowConstantExport:!0,allowExportNames:["action","loader","caseSensitive","index","handle","errorElement","ErrorBoundary","shouldRevalidate"]}]},m__default.default.configs.recommended.rules,y__default.default.configs.recommended.rules,v__default.default.configs.recommended.rules,G?m__default.default.configs["jsx-runtime"].rules:{})}],k=$;var z=["**/*.ts","**/*.tsx"],L=[...typescriptEslint.configs.recommended,...typescriptEslint.configs.stylistic].map(p=>({...p,files:z}));var K=[...j,...x,...h,...k,...L],Ae=K;

module.exports = Ae;
