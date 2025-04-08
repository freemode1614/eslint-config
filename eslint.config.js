import prettier from "./dist/extra/prettier.js"
import typescript from "./dist/extra/typescript.js"
import config from "./dist/flat.js"

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
    ...config,
    ...typescript,
    ...prettier,
    {
        ignores: ["dist"]
    }
]
