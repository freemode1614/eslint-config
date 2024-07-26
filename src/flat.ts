import type { ESLintRules } from "eslint/rules";

import base from "@/flat/base";
import jest from "@/flat/jest";
import react from "@/flat/react";
import typescript from "@/flat/typescript";
import customRules from "@/rules/custom";

const config = [
  ...base,
  ...typescript,
  ...jest,
  ...react,
  {
    rules: Object.assign(customRules) as ESLintRules,
  },
];

export default config;
