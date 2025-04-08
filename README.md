# @moccona/eslint-config

A simple set of eslint configurations.

## Usage

### Legacy Config

<h3 style="color:red;font-size:48px">Legacy support is dropped!</h2>

### Flat Config

```js
// eslint.config.js
import config from "@moccona/eslint-config";

export default [
  ...config,
  {
    // ... your custom config
  },
];
```

### Extra Config

#### TypeScript

1. Install *Typescript*

```sh
// npm install typescript -D
// yarn add typescript -D
pnpm install typescript -D

```

2. Add extra in eslint.config.js

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config";
import typescriptConfig from "@moccona/eslint-config/extra/typescript.js";

export default [
  ...baseConfig,
  ...typescriptConfig,
  {
    // ... your custom config
  },
];
```

#### Prettier

1. Install *Prettier*

```sh
// npm install prettier -D
// yarn add prettier -D
pnpm install prettier -D

```

1. Add extra in eslint.config.js

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config";
import prettierConfig from "@moccona/eslint-config/extra/prettier.js";

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ... your custom config
  },
];
```

#### React

1. Install *React*

```sh
// npm install react react-dom -D
// yarn add react react-dom -D
pnpm install react react-dom -D

```

2. Add extra in eslint.config.js

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config";
import reactConfig from "@moccona/eslint-config/extra/react.js";

export default [
  ...baseConfig,
  ...reactConfig,
  {
    // ... your custom config
  },
];
```

#### Tailwindcss v3

1. Install *Tailwindcss*

```sh
// npm install tailwindcss@3 -D
// yarn add tailwindcss@3 -D
pnpm install tailwindcss@3 -D

```

2. Add extra in eslint.config.js

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config";
import taiwindcssConfig from "@moccona/eslint-config/extra/tailwindcssv3.js";

export default [
  ...baseConfig,
  ...taiwindcssConfig,
  {
    // ... your custom config
  },
];
```

#### Vitest

1. Install *Vitest*

```sh
// npm install vitest -D
// yarn add vitest -D
pnpm install vitest -D

```

2. Add extra in eslint.config.js

```js
// eslint.config.js
import baseConfig from "@moccona/eslint-config";
import vitestConfig from "@moccona/eslint-config/extra/vitest.js";

export default [
  ...baseConfig,
  ...vitestConfig,
  {
    // ... your custom config
  },
];
```