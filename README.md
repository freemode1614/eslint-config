# @moccona/eslint-config

## Flat

### Usage

1. Import base configuration.

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config/flat";

export default baseConfig;
```

2. Using extras.

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config/flat";

// if you use typescript.
import tsConfig from "@moccona/eslint-config/extra/typescript";

// if you use prettier
import prettierConfig from "@moccona/eslint-config/extra/prettier";

export default [...baseConfig, ...tsConfig, ...prettierConfig];
```

3. Avaliable extras

- typescript
- react
- tailwindcssv3
- jest
- vitest

## Legacy

!!!DEPRACATED
