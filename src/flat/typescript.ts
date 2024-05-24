import { Linter } from "eslint";
import { configs } from "typescript-eslint";

const files = ["**/*.ts", "**/*.tsx"];

export default [...configs.recommended, ...configs.stylistic].map((cfg) => ({ ...cfg, files })) as Linter.FlatConfig[];
