/**
 * @type {import("eslint").Linter.Config[]}
 */
const config = {
    overrides: [{
        files: ["*.tsx", "*.ts"],
    }]
}

// eslint-disable-next-line unicorn/prefer-module, no-undef
module.exports = {config};