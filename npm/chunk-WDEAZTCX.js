import { resolve } from 'node:path';
import t from 'fs-extra';

var{readJSONSync:p}=t,n=p(resolve(process.cwd(),"package.json"),{throws:!1});if(!n)throw new Error("No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.");var {dependencies:f={},devDependencies:u={},peerDependencies:l={}}=n,r=Object.keys(Object.assign({},f,u,l)),o=r.includes("react"),d=r.includes("prettier"),e=r.includes("typescript"),m=r.includes("jest"),s=n.type==="module";console.log("isUsingReact ->",o,`
`,"isUsingPrettier ->",d,`
`,"isUsingTypescript ->",e,`
`,"isUsingJest ->",m,`
`,"isESModule ->",s);var U={"simple-import-sort/imports":"error","simple-import-sort/exports":"error","jsdoc/require-jsdoc":e?"off":"warn","jsdoc/require-returns":e?"off":"warn","jsdoc/require-returns-description":e?"off":"warn","jsdoc/require-param":e?"off":"warn","jsdoc/require-param-description":e?"off":"warn","jsdoc/check-param-names":e?"off":"warn","n/no-missing-import":"off","n/no-missing-require":"off","unicorn/prefer-module":s?"error":"off","unicorn/switch-case-braces":"off","unicorn/prevent-abbreviations":["warn",{replacements:{useRef:!1}}],"unicorn/filename-case":["warn",{case:"camelCase",ignore:[/API/,/JSON/,/App/]}],"unicorn/prefer-set-has":"warn","unicorn/prefer-string-replace-all":"off","unicorn/no-array-callback-reference":"off","unicorn/no-array-push-push":"warn","unicorn/prefer-export-from":"warn","unicorn/no-array-for-each":"off","unicorn/import-style":["warn"],"unicorn/prefer-spread":"warn","unicorn/no-for-loop":"warn","unicorn/no-null":o?"off":"warn","no-case-declarations":"off"};

export { o as a, d as b, e as c, m as d, s as e, U as f };
