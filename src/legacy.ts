import { Linter } from "eslint";

import base from "@/legacy/base";
import jest from "@/legacy/jest";
import react from "@/legacy/react";
import typescript from "@/legacy/typescript";

const config = {
  ...base,
  overrides: [typescript, jest, react],
} as Linter.Config;

export default config;
