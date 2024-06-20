# @moccona/eslint-config

A simple eslint configuration

## Flat

```js
// eslint.config.js
import config from "@moccona/eslint-config/flat";
export default config;
```

## Legacy

```js
// .eslintrc.js
const config = require("@moccona/eslint-config");
module.exports = config;
```

## Plugins that need to be added after support flat configuration

- eslint-plugin-import
  - eslint-plugin-resolver-typescript
