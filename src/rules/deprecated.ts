import { Linter } from "eslint";

/**
 */
const config: Pick<Linter.ConfigOverride, "rules"> = {
  rules: {
    "callback-return": "off", //
    "global-require": "off", //
    "handle-callback-err": "off", //
    "id-blacklist": "off", // Replaced by id-denylist
    "indent-legacy": "off", // Replaced by indent
    "lines-around-directive": "off", // Replaced by padding-line-between-statements
    "newline-after-var": "off", // Replaced by padding-line-between-statements
    "newline-before-return": "off", // Replaced by padding-line-between-statements
    "no-buffer-constructor": "off", //
    "no-catch-shadow": "off", // Replaced by no-shadow
    "no-mixed-requires": "off", //
    "no-native-reassign": "off", // Replaced by no-global-assign
    "no-negated-in-lhs": "off", // Replaced by no-unsafe-negation
    "no-new-require": "off", //
    "no-path-concat": "off", //
    "no-process-env": "off", //
    "no-process-exit": "off", //
    "no-restricted-modules": "off", //
    "no-spaced-func": "off", // Replaced by func-call-spacing
    "no-sync": "off", //
    "prefer-reflect": "off", //
    "require-jsdoc": "off", //
    "valid-jsdoc": "off", //
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "array-element-newline": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "dot-location": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "off",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": "off",
    "max-len": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-confusing-arrow": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-floating-decimal": "off",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-new-object": "off",
    "no-new-symbol": "off",
    "no-return-await": "off",
    "no-tabs": "off",
    "no-trailing-spaces": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var-declaration-per-line": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "quote-props": "off",
    quotes: "off",
    "rest-spread-spacing": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "off",
    "switch-colon-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "wrap-iife": "off",
    "wrap-regex": "off",
    "yield-star-spacing": "off",
  },
};

export default config;
