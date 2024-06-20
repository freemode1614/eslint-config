import { custom_default, isUsingPrettier, isESModule, isUsingTypescript, isUsingReact, isUsingJest } from './chunk-K45L7TJT.js';
import { resolve } from 'node:path';
import { readJSONSync } from 'fs-extra';
import semver from 'semver';

// src/rules/deprecated.ts
var config = {
  rules: {
    "callback-return": "off",
    // deprecated
    "global-require": "off",
    // deprecated
    "handle-callback-err": "off",
    // deprecated
    "id-blacklist": "off",
    // deprecated Replaced by id-denylist
    "indent-legacy": "off",
    // deprecated Replaced by indent
    "lines-around-directive": "off",
    // deprecated Replaced by padding-line-between-statements
    "newline-after-var": "off",
    // deprecated Replaced by padding-line-between-statements
    "newline-before-return": "off",
    // deprecated Replaced by padding-line-between-statements
    "no-buffer-constructor": "off",
    // deprecated
    "no-catch-shadow": "off",
    // deprecated Replaced by no-shadow
    "no-mixed-requires": "off",
    // deprecated
    "no-native-reassign": "off",
    // deprecated Replaced by no-global-assign
    "no-negated-in-lhs": "off",
    // deprecated Replaced by no-unsafe-negation
    "no-new-require": "off",
    // deprecated
    "no-path-concat": "off",
    // deprecated
    "no-process-env": "off",
    // deprecated
    "no-process-exit": "off",
    // deprecated
    "no-restricted-modules": "off",
    // deprecated
    "no-spaced-func": "off",
    // deprecated Replaced by func-call-spacing
    "no-sync": "off",
    // deprecated
    "prefer-reflect": "off",
    // deprecated
    "require-jsdoc": "off",
    // deprecated
    "valid-jsdoc": "off"
    // deprecated
  }
};
var deprecated_default = config;

// src/rules/logic.ts
var config2 = {
  rules: {
    "array-callback-return": "off",
    // Enforce return statements in callbacks of array methods
    "constructor-super": "error",
    // "Require `super()` calls in constructors"
    "for-direction": "off",
    // "Enforce "for" loop update clause moving the counter in the right direction"
    "getter-return": "error",
    // "Enforce `return` statements in getters"
    "no-async-promise-executor": "off",
    // "Disallow using an async function as a Promise executor"
    "no-await-in-loop": "error",
    // "Disallow `await` inside of loops"
    "no-class-assign": "off",
    // "Disallow reassigning class members"
    "no-compare-neg-zero": "warn",
    // "Disallow comparing against -0"
    "no-cond-assign": "error",
    // "Disallow assignment operators in conditional expressions"
    "no-const-assign": "error",
    // "Disallow reassigning `const` variables"
    "no-constant-binary-expression": "warn",
    // "Disallow expressions where the operation doesn't affect the value"
    "no-constant-condition": "warn",
    // "Disallow constant expressions in conditions"
    "no-constructor-return": "warn",
    // "Disallow returning value from constructor"
    "no-control-regex": "off",
    // "Disallow control characters in regular expressions"
    "no-debugger": "error",
    // "Disallow the use of `debugger`"
    "no-dupe-args": "error",
    // "Disallow duplicate arguments in `function` definitions"
    "no-dupe-class-members": "error",
    // "Disallow duplicate class members"
    "no-dupe-else-if": "error",
    // "Disallow duplicate conditions in if-else-if chains"
    "no-dupe-keys": "error",
    // "Disallow duplicate keys in object literals"
    "no-duplicate-case": "error",
    // "Disallow duplicate case labels"
    "no-duplicate-imports": "error",
    // "Disallow duplicate module imports"
    "no-empty-character-class": "error",
    // "Disallow empty character classes in regular expressions"
    "no-empty-pattern": "error",
    // "Disallow empty destructuring patterns"
    "no-ex-assign": "error",
    // "Disallow reassigning exceptions in `catch` clauses"
    "no-fallthrough": "error",
    // "Disallow fallthrough of `case` statements"
    "no-func-assign": "warn",
    // "Disallow reassigning `function` declarations"
    "no-import-assign": "error",
    // "Disallow assigning to imported bindings"
    "no-inner-declarations": "off",
    // "Disallow variable or `function` declarations in nested blocks"
    "no-invalid-regexp": "error",
    // "Disallow invalid regular expression strings in `RegExp` constructors"
    "no-irregular-whitespace": "off",
    // "Disallow irregular whitespace"
    "no-loss-of-precision": "error",
    // "Disallow literal numbers that lose precision"
    "no-misleading-character-class": "off",
    // "Disallow characters which are made with multiple code points in character class syntax"
    "no-new-native-nonconstructor": "error",
    // "Disallow `new` operators with global non-constructor functions"
    "no-new-symbol": "error",
    // "Disallow `new` operators with the `Symbol` object"
    "no-obj-calls": "error",
    // "Disallow calling global object properties as functions"
    "no-promise-executor-return": "warn",
    // "Disallow returning values from Promise executor functions"
    "no-prototype-builtins": "warn",
    // "Disallow calling some `Object.prototype` methods directly on objects"
    "no-self-assign": "error",
    // "Disallow assignments where both sides are exactly the same"
    "no-self-compare": "error",
    // "Disallow comparisons where both sides are exactly the same"
    "no-setter-return": "error",
    // "Disallow returning values from setters"
    "no-sparse-arrays": "off",
    // "Disallow sparse arrays"
    "no-template-curly-in-string": "error",
    // "Disallow template literal placeholder syntax in regular strings"
    "no-this-before-super": "error",
    // "Disallow `this`/`super` before calling `super()` in constructors"
    "no-undef": "off",
    // "Disallow the use of undeclared variables unless mentioned in `/*global */` comments"
    "no-unexpected-multiline": "error",
    // "Disallow confusing multiline expressions"
    "no-unmodified-loop-condition": "error",
    // "Disallow unmodified loop conditions"
    "no-unreachable": "error",
    // "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements"
    "no-unreachable-loop": "error",
    // "Disallow loops with a body that allows only one iteration"
    "no-unsafe-finally": "warn",
    // "Disallow control flow statements in `finally` blocks"
    "no-unsafe-negation": "off",
    // "Disallow negating the left operand of relational operators"
    "no-unsafe-optional-chaining": "error",
    // "Disallow use of optional chaining in contexts where the `undefined` value is not allowed"
    "no-unused-private-class-members": "error",
    // "Disallow unused private class members"
    "no-unused-vars": "error",
    // "Disallow unused variables"
    "no-use-before-define": "warn",
    // "Disallow the use of variables before they are defined"
    "no-useless-backreference": "off",
    // "Disallow useless backreferences in regular expressions"
    "require-atomic-updates": "warn",
    // "Disallow assignments that can lead to race conditions due to usage of `await` or `yield`"
    "use-isnan": "error",
    // "Require calls to `isNaN()` when checking for `NaN`"
    "valid-typeof": "error"
    // "Enforce comparing `typeof` expressions against valid strings"
  }
};
var logic_default = config2;

// src/rules/styles.ts
var config3 = {
  rules: {
    "array-bracket-newline": ["warn", "consistent"],
    // Enforce linebreaks after opening and before closing array brackets
    "array-bracket-spacing": ["warn", "never"],
    // Enforce consistent spacing inside array brackets
    "array-element-newline": ["warn", "consistent"],
    // Enforce line breaks after each array element
    "arrow-parens": [
      "warn",
      "as-needed",
      {
        requireForBlockBody: true
      }
    ],
    // Require parentheses around arrow function arguments
    "arrow-spacing": ["warn", { before: true, after: true }],
    // Enforce consistent spacing before and after the arrow in arrow functions
    "block-spacing": ["warn", "always"],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    "brace-style": ["warn", "1tbs"],
    // Enforce consistent brace style for blocks
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    // Require or disallow trailing commas
    "comma-spacing": ["warn", { before: false, after: true }],
    // Enforce consistent spacing before and after commas
    "comma-style": ["warn", "last"],
    // Enforce consistent comma style
    "computed-property-spacing": ["warn", "never"],
    // Enforce consistent spacing inside computed property brackets
    "dot-location": ["warn", "object"],
    // Enforce consistent newlines before and after dots
    "eol-last": "off",
    // Require or disallow newline at the end of files
    "func-call-spacing": ["warn", "never"],
    // Require or disallow spacing between function identifiers and their invocations
    "function-call-argument-newline": ["warn", "consistent"],
    // Enforce line breaks between arguments of a function call
    "function-paren-newline": ["warn", "consistent"],
    // Enforce consistent line breaks inside function parentheses
    "generator-star-spacing": ["warn"],
    // Enforce consistent spacing around `*` operators in generator functions
    "implicit-arrow-linebreak": ["warn", "beside"],
    // Enforce the location of arrow function bodies
    indent: ["warn", 2],
    // Enforce consistent indentation
    "jsx-quotes": ["off"],
    // Enforce the consistent use of either double or single quotes in JSX attributes
    "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    // Enforce consistent spacing between keys and values in object literal properties
    "keyword-spacing": ["off"],
    // Enforce consistent spacing before and after keywords
    "line-comment-position": ["off", "above"],
    // Enforce position of line comments
    "linebreak-style": ["off"],
    // Enforce consistent linebreak style
    "lines-around-comment": [
      "off",
      {
        beforeBlockComment: false,
        beforeLineComment: true
      }
    ],
    // Require empty lines around comments
    "lines-between-class-members": ["off"],
    // Require or disallow an empty line between class members
    "max-len": ["off"],
    // Enforce a maximum line length
    "max-statements-per-line": ["off"],
    // Enforce a maximum number of statements allowed per line
    "multiline-ternary": ["off"],
    // Enforce newlines between operands of ternary expressions
    "new-parens": ["off"],
    // Enforce or disallow parentheses when invoking a constructor with no arguments
    "newline-per-chained-call": [
      "warn",
      {
        ignoreChainWithDepth: 1
      }
    ],
    // Require a newline after each call in a method chain
    "no-extra-parens": ["off"],
    // Disallow unnecessary parentheses
    "no-mixed-spaces-and-tabs": ["off"],
    // Disallow mixed spaces and tabs for indentation
    "no-multi-spaces": ["off"],
    // Disallow multiple spaces
    "no-multiple-empty-lines": ["off"],
    // Disallow multiple empty lines
    "no-tabs": ["off"],
    // Disallow all tabs
    "no-trailing-spaces": ["off"],
    // Disallow trailing whitespace at the end of lines
    "no-whitespace-before-property": ["off"],
    // Disallow whitespace before properties
    "nonblock-statement-body-position": ["warn"],
    // Enforce the location of single-line statements
    "object-curly-newline": ["off"],
    // Enforce consistent line breaks after opening and before closing braces
    "object-curly-spacing": ["off"],
    // Enforce consistent spacing inside braces
    "object-property-newline": ["off"],
    // Enforce placing object properties on separate lines
    "operator-linebreak": ["off"],
    // Enforce consistent linebreak style for operators
    "padded-blocks": ["off"],
    // Require or disallow padding within blocks
    "padding-line-between-statements": ["off"],
    // Require or disallow padding lines between statements
    quotes: ["warn", "double"],
    // Enforce the consistent use of either backticks, double, or single quotes
    "rest-spread-spacing": ["off"],
    // Enforce spacing between rest and spread operators and their expressions
    semi: ["off"],
    // Require or disallow semicolons instead of ASI
    "semi-spacing": ["off"],
    // Enforce consistent spacing before and after semicolons
    "semi-style": ["off"],
    // Enforce location of semicolons
    "space-before-blocks": ["warn"],
    // Enforce consistent spacing before blocks
    "space-before-function-paren": [
      "off",
      {
        anonymous: "always",
        named: "always",
        asyncArrow: "always"
      }
    ],
    // Enforce consistent spacing before `function` definition opening parenthesis
    "space-in-parens": ["off"],
    // Enforce consistent spacing inside parentheses
    "space-infix-ops": ["off"],
    // Require spacing around infix operators
    "space-unary-ops": ["off"],
    // Enforce consistent spacing before or after unary operators
    "switch-colon-spacing": ["off"],
    // Enforce spacing around colons of switch statements
    "template-curly-spacing": ["off"],
    // Require or disallow spacing around embedded expressions of template strings
    "template-tag-spacing": ["off"],
    // Require or disallow spacing between template tags and their literals
    "unicode-bom": ["off"],
    // Require or disallow Unicode byte order mark (BOM)
    "wrap-iife": ["warn"],
    // Require parentheses around immediate `function` invocations
    "wrap-regex": ["warn"],
    // Require parenthesis around regex literals
    "yield-star-spacing": ["off"]
    // Require or disallow spacing around the `*` in `yield*` expressions
  }
};
var styles_default = config3;

// src/rules/suggestions.ts
var config4 = {
  rules: {
    "accessor-pairs": "off",
    // Enforce getter and setter pairs in objects and classes
    "arrow-body-style": "off",
    // Require braces around arrow function bodies
    "block-scoped-var": "off",
    // Enforce the use of variables within the scope they are defined
    camelcase: "off",
    // Enforce camelcase naming convention
    "capitalized-comments": "off",
    // Enforce or disallow capitalization of the first letter of a comment
    "class-methods-use-this": "off",
    // Enforce that class methods utilize `this`
    complexity: "off",
    // Enforce a maximum cyclomatic complexity allowed in a program
    "consistent-return": "off",
    // Require `return` statements to either always or never specify values
    "consistent-this": "off",
    // Enforce consistent naming when capturing the current execution context
    curly: "off",
    // Enforce consistent brace style for all control statements
    "default-case": "off",
    // Require `default` cases in `switch` statements
    "default-case-last": "off",
    // Enforce default clauses in switch statements to be last
    "default-param-last": "off",
    // Enforce default parameters to be last
    "dot-notation": "off",
    // Enforce dot notation whenever possible
    eqeqeq: "off",
    // Require the use of `===` and `!==`
    "func-name-matching": "off",
    // Require function names to match the name of the variable or property to which they are assigned
    "func-names": "off",
    // Require or disallow named `function` expressions
    "func-style": "off",
    // Enforce the consistent use of either `function` declarations or expressions
    "grouped-accessor-pairs": "off",
    // Require grouped accessor pairs in object literals and classes
    "guard-for-in": "off",
    // Require `for-in` loops to include an `if` statement
    "id-denylist": "off",
    // Disallow specified identifiers
    "id-length": "off",
    // Enforce minimum and maximum identifier lengths
    "id-match": "off",
    // Require identifiers to match a specified regular expression
    "init-declarations": "off",
    // Require or disallow initialization in variable declarations
    "logical-assignment-operators": "off",
    // Require or disallow logical assignment logical operator shorthand
    "max-classes-per-file": "off",
    // Enforce a maximum number of classes per file
    "max-depth": "off",
    // Enforce a maximum depth that blocks can be nested
    "max-lines": "off",
    // Enforce a maximum number of lines per file
    "max-lines-per-function": "off",
    // Enforce a maximum number of lines of code in a function
    "max-nested-callbacks": "off",
    // Enforce a maximum depth that callbacks can be nested
    "max-params": "off",
    // Enforce a maximum number of parameters in function definitions
    "max-statements": "off",
    // Enforce a maximum number of statements allowed in function blocks
    "multiline-comment-style": "off",
    // Enforce a particular style for multiline comments
    "new-cap": "off",
    // Require constructor names to begin with a capital letter
    "no-alert": "off",
    // Disallow the use of `alert`, `confirm`, and `prompt`
    "no-array-constructor": "off",
    // Disallow `Array` constructors
    "no-bitwise": "off",
    // Disallow bitwise operators
    "no-caller": "off",
    // Disallow the use of `arguments.caller` or `arguments.callee`
    "no-case-declarations": "off",
    // Disallow lexical declarations in case clauses
    "no-confusing-arrow": "off",
    // Disallow arrow functions where they could be confused with comparisons
    "no-console": "off",
    // Disallow the use of `console`
    "no-continue": "off",
    // Disallow `continue` statements
    "no-delete-var": "off",
    // Disallow deleting variables
    "no-div-regex": "off",
    // Disallow division operators explicitly at the beginning of regular expressions
    "no-else-return": "off",
    // Disallow `else` blocks after `return` statements in `if` statements
    "no-empty": "off",
    // Disallow empty block statements
    "no-empty-function": "off",
    // Disallow empty functions
    "no-empty-static-block": "off",
    // Disallow empty static blocks
    "no-eq-null": "off",
    // Disallow `null` comparisons without type-checking operators
    "no-eval": "off",
    // Disallow the use of `eval()`
    "no-extend-native": "off",
    // Disallow extending native types
    "no-extra-bind": "off",
    // Disallow unnecessary calls to `.bind()`
    "no-extra-boolean-cast": "off",
    // Disallow unnecessary boolean casts
    "no-extra-label": "off",
    // Disallow unnecessary labels
    "no-extra-semi": "off",
    // Disallow unnecessary semicolons
    "no-floating-decimal": "off",
    // Disallow leading or trailing decimal points in numeric literals
    "no-global-assign": "off",
    // Disallow assignments to native objects or read-only global variables
    "no-implicit-coercion": "off",
    // Disallow shorthand type conversions
    "no-implicit-globals": "off",
    // Disallow declarations in the global scope
    "no-implied-eval": "off",
    // Disallow the use of `eval()`-like methods
    "no-inline-comments": "off",
    // Disallow inline comments after code
    "no-invalid-this": "off",
    // Disallow use of `this` in contexts where the value of `this` is `undefined`
    "no-iterator": "off",
    // Disallow the use of the `__iterator__` property
    "no-label-var": "off",
    // Disallow labels that share a name with a variable
    "no-labels": "off",
    // Disallow labeled statements
    "no-lone-blocks": "off",
    // Disallow unnecessary nested blocks
    "no-lonely-if": "off",
    // Disallow `if` statements as the only statement in `else` blocks
    "no-loop-func": "off",
    // Disallow function declarations that contain unsafe references inside loop statements
    "no-magic-numbers": "off",
    // Disallow magic numbers
    "no-mixed-operators": "off",
    // Disallow mixed binary operators
    "no-multi-assign": "off",
    // Disallow use of chained assignment expressions
    "no-multi-str": "off",
    // Disallow multiline strings
    "no-negated-condition": "off",
    // Disallow negated conditions
    "no-nested-ternary": "off",
    // Disallow nested ternary expressions
    "no-new": "off",
    // Disallow `new` operators outside of assignments or comparisons
    "no-new-func": "off",
    // Disallow `new` operators with the `Function` object
    "no-new-object": "off",
    // Disallow `Object` constructors
    "no-new-wrappers": "off",
    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    "no-nonoctal-decimal-escape": "off",
    // Disallow `\8` and `\9` escape sequences in string literals
    "no-octal": "off",
    // Disallow octal literals
    "no-octal-escape": "off",
    // Disallow octal escape sequences in string literals
    "no-param-reassign": "off",
    // Disallow reassigning `function` parameters
    "no-plusplus": "off",
    // Disallow the unary operators `++` and `--`
    "no-proto": "off",
    // Disallow the use of the `__proto__` property
    "no-redeclare": "off",
    // Disallow variable redeclaration
    "no-regex-spaces": "off",
    // Disallow multiple spaces in regular expressions
    "no-restricted-exports": "off",
    // Disallow specified names in exports
    "no-restricted-globals": "off",
    // Disallow specified global variables
    "no-restricted-imports": "off",
    // Disallow specified modules when loaded by `import`
    "no-restricted-properties": "off",
    // Disallow certain properties on certain objects
    "no-restricted-syntax": "off",
    // Disallow specified syntax
    "no-return-assign": "off",
    // Disallow assignment operators in `return` statements
    "no-return-await": "off",
    // Disallow unnecessary `return await`
    "no-script-url": "off",
    // Disallow `javascript:` urls
    "no-sequences": "off",
    // Disallow comma operators
    "no-shadow": "off",
    // Disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow-restricted-names": "off",
    // Disallow identifiers from shadowing restricted names
    "no-ternary": "off",
    // Disallow ternary operators
    "no-throw-literal": "off",
    // Disallow throwing literals as exceptions
    "no-undef-init": "off",
    // Disallow initializing variables to `undefined`
    "no-undefined": "off",
    // Disallow the use of `undefined` as an identifier
    "no-underscore-dangle": "off",
    // Disallow dangling underscores in identifiers
    "no-unneeded-ternary": "off",
    // Disallow ternary operators when simpler alternatives exist
    "no-unused-expressions": "off",
    // Disallow unused expressions
    "no-unused-labels": "off",
    // Disallow unused labels
    "no-useless-call": "off",
    // Disallow unnecessary calls to `.call()` and `.apply()`
    "no-useless-catch": "off",
    // Disallow unnecessary `catch` clauses
    "no-useless-computed-key": "off",
    // Disallow unnecessary computed property keys in objects and classes
    "no-useless-concat": "off",
    // Disallow unnecessary concatenation of literals or template literals
    "no-useless-constructor": "off",
    // Disallow unnecessary constructors
    "no-useless-escape": "off",
    // Disallow unnecessary escape characters
    "no-useless-rename": "off",
    // Disallow renaming import, export, and destructured assignments to the same name
    "no-useless-return": "off",
    // Disallow redundant return statements
    "no-var": "warn",
    // Require `let` or `const` instead of `var`
    "no-void": "off",
    // Disallow `void` operators
    "no-warning-comments": "off",
    // Disallow specified warning terms in comments
    "no-with": "error",
    // Disallow `with` statements
    "object-shorthand": "off",
    // Require or disallow method and property shorthand syntax for object literals
    "one-var": "off",
    // Enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line": "off",
    // Require or disallow newlines around variable declarations
    "operator-assignment": "off",
    // Require or disallow assignment operator shorthand where possible
    "prefer-arrow-callback": "off",
    // Require using arrow functions for callbacks
    "prefer-const": "off",
    // Require `const` declarations for variables that are never reassigned after declared
    "prefer-destructuring": "off",
    // Require destructuring from arrays and/or objects
    "prefer-exponentiation-operator": "off",
    // Disallow the use of `Math.pow` in favor of the `**` operator
    "prefer-named-capture-group": "off",
    // Enforce using named capture group in regular expression
    "prefer-numeric-literals": "off",
    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    "prefer-object-has-own": "off",
    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    "prefer-object-spread": "off",
    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    "prefer-promise-reject-errors": "warn",
    // Require using Error objects as Promise rejection reasons
    "prefer-regex-literals": "off",
    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    "prefer-rest-params": "error",
    // Require rest parameters instead of `arguments`
    "prefer-spread": "off",
    // Require spread operators instead of `.apply()`
    "prefer-template": "warn",
    // Require template literals instead of string concatenation
    "quote-props": "off",
    // Require quotes around object literal property names
    radix: "off",
    // Enforce the consistent use of the radix argument when using `parseInt()`
    "require-await": "off",
    // Disallow async functions which have no `await` expression
    "require-unicode-regexp": "off",
    // Enforce the use of `u` flag on RegExp
    "require-yield": "off",
    // Require generator functions to contain `yield`
    "sort-imports": "off",
    // Enforce sorted import declarations within modules
    "sort-keys": "off",
    // Require object keys to be sorted
    "sort-vars": "off",
    // Require variables within the same declaration block to be sorted
    "spaced-comment": "off",
    // Enforce consistent spacing after the `//` or `/*` in a comment
    strict: "off",
    // Require or disallow strict mode directives
    "symbol-description": "off",
    // Require symbol descriptions
    "vars-on-top": "off",
    // Require `var` declarations be placed at the top of their containing scope
    yoda: "off"
    // Require or disallow "Yoda" conditions
  }
};
var suggestions_default = config4;

// src/legacy/base.ts
var plugins = ["compat", "jsdoc", "n", "simple-import-sort", "unicorn"];
var extends_ = [`plugin:compat/recommended`, `plugin:unicorn/recommended`];
var rules = {
  ...logic_default.rules,
  ...suggestions_default.rules,
  ...deprecated_default.rules,
  ...custom_default
};
if (isESModule) {
  plugins.push("import");
  extends_.push(`plugin:import/recommended`);
  isUsingPrettier && extends_.push(`plugin:import/react`);
  isUsingTypescript && extends_.push(`plugin:import/typescript`);
}
if (isESModule) {
  extends_.push(`plugin:n/recommended-module`);
} else {
  extends_.push(`plugin:n/recommended-script`);
}
if (isUsingPrettier) {
  extends_.push(`plugin:prettier/recommended`);
} else {
  Object.assign(rules, styles_default.rules);
}
if (isUsingTypescript) {
  extends_.push(`plugin:jsdoc/recommended-typescript`);
} else {
  extends_.push(`plugin:jsdoc/recommended`);
}
var base_default = {
  env: {
    browser: true,
    worker: true,
    node: true,
    commonjs: !isESModule,
    es6: isESModule,
    jest: true
  },
  parserOptions: {
    sourceType: isESModule ? "module" : "commonjs",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: isUsingReact,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  // Ignore css files and .d.ts files.
  ignorePatterns: [
    "**/*.{css,less,stylus,pcss}",
    "**/*.d.ts",
    "**/npm/**",
    "**/node_modules/**",
    "**/build/**",
    "**/dist/**",
    "**/temp/**"
  ],
  rules,
  plugins,
  extends: extends_
};

// src/legacy/jest.ts
var jest_default = {
  files: ["**/*.{spec,test}.{js,ts,jsx,tsx}", "tests?/*.{js,ts,jsx,tsx}"],
  plugins: isUsingJest ? ["jest"] : [],
  extends: isUsingJest ? ["plugin:jest/all"] : []
};

// src/legacy/json.ts
var json_default = {
  files: ["**/*.json"],
  plugins: ["jsonc"],
  extends: ["plugin:jsonc/recommended-with-json", "plugin:jsonc/prettier"]
};
var isReactVersionGreaterThan17 = function checkReactVersion() {
  try {
    const reactPackage = readJSONSync(resolve(process.cwd(), "node_modules/react/package.json"));
    return !!(reactPackage && semver.satisfies(reactPackage.version, ">=17"));
  } catch {
    return false;
  }
}();
var files = ["**/*.{tsx,jsx}"];
var config5 = {
  files,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true
    }
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    isReactVersionGreaterThan17 ? "plugin:react/jsx-runtime" : ""
  ].filter(Boolean),
  settings: { react: { version: "detect" } },
  rules: {
    // Force only export components from a TSX or JSX file.
    "react-refresh/only-export-components": [
      "error",
      {
        allowConstantExport: true,
        allowExportNames: [
          `action`,
          // The route action is called when a submission is sent to the route from a Form, fetcher, or submission.
          `loader`,
          // The route loader is called before the route renders and provides data for the element through useLoaderData.
          `caseSensitive`,
          // Instructs the route to match case or not.
          `index`,
          `handle`,
          `errorElement`,
          `ErrorBoundary`,
          `shouldRevalidate`
          // Using this API risks your UI getting out of sync with your data, use with caution!
        ]
      }
    ]
  }
};
var react_default = config5;

// src/legacy/typescript.ts
var files2 = ["**/*.ts", "**/*.tsx"];
var typescript_default = {
  files: files2,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"]
};

// src/legacy.ts
var config6 = {
  ...base_default,
  overrides: [json_default, jest_default, react_default, typescript_default]
};
var legacy_default = config6;

export { legacy_default as default };
