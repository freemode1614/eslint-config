import { Linter } from "eslint";

const config: Pick<Linter.ConfigOverride, "rules"> = {
  rules: {
    "generator-star": "off",
    // Replaced by generator-star-spacing
    "global-strict": "off",
    // Replaced by strict
    "no-arrow-condition": "off",
    // Replaced by no-confusing-arrowno-constant-condition
    "no-comma-dangle": "off",
    // Replaced by comma-dangle
    "no-empty-class": "off",
    // Replaced by no-empty-character-class
    "no-empty-label": "off",
    // Replaced by no-labels
    "no-extra-strict": "off",
    // Replaced by strict
    "no-reserved-keys": "off",
    // Replaced by quote-props
    "no-space-before-semi": "off",
    // Replaced by semi-spacing
    "no-wrap-func": "off",
    // Replaced by no-extra-parens
    "space-after-function-name": "off",
    // Replaced by space-before-function-paren
    "space-after-keywords": "off",
    // Replaced by keyword-spacing
    "space-before-function-parentheses": "off",
    // Replaced by space-before-function-paren
    "space-before-keywords": "off",
    // Replaced by keyword-spacing
    "space-in-brackets": "off",
    // Replaced by object-curly-spacingarray-bracket-spacing
    "space-return-throw-case": "off",
    // Replaced by keyword-spacing
    "space-unary-word-ops": "off",
    // Replaced by space-unary-ops
    "spaced-line-comment": "off",
    // Replaced by spaced-comment
    "valid-jsdoc": "off",
    // Replaced by
    "require-jsdoc": "off",
    // Replaced by
  },
};

export default config;
