import type { ESLintRules } from "eslint/rules";

import base from "@/flat/base";
import jest from "@/flat/jest";
import json from "@/flat/json";
import react from "@/flat/react";
import typescript from "@/flat/typescript";
import customRules from "@/rules/custom";

const config = [
  ...base,
  ...jest,
  ...json,
  ...react,
  ...typescript,
  {
    rules: Object.assign(customRules) as ESLintRules,
  }
];

export default config;
