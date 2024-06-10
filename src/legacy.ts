import { Linter } from "eslint";

import base from "@/legacy/base";
import jest from "@/legacy/jest";
import json from "@/legacy/json";
import react from "@/legacy/react";
import typescript from "@/legacy/typescript";

const config = {
  ...base,
  overrides: [json, jest, react, typescript],
} as Linter.Config;

export default config;
