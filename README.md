# @moccona/eslint-config

The @moccona/eslint-config package provides a convenient way to configure ESLint rules. It allows you to extend the default configuration with custom rules tailored to your project's needs.

## Installation

1. Basic Installation:

```sh
npm install @moccona/eslint-config -D
```

## Available Extras

The package provides additional configuration options through "extras" modules, which can be imported and customized. Currently supported extras include:

- TypeScript: Extends the base configuration with TypeScript-specific rules.
- React: Provides React-specific configurations for ESLint checks.
- TailwindCSSv3: Offers Tailwind CSS utilities integration into ESLint reports.
- Jest: Enhances ESLint with Jest-generated test files and fixtures.
- Vitest: Adds Vitest test discovery options to your ESLint configuration.

## Example Usage

Here's an example of how you might use the package in your project:

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config/flat";
// if you use typescript.
import tsConfig from "@moccona/eslint-config/extra/typescript";
// if you use prettier
import prettierConfig from "@moccona/eslint-config/extra/prettier";

export default [
  ...baseConfig,
  ...tsConfig,
  ...prettierConfig,
  {
    // Add your custom here.
  },
];
```

## Notes

The legacy configuration is marked as deprecated. Users are encouraged to use the new format instead.
