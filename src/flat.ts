import prettierRecommended from "eslint-plugin-prettier/recommended";

import base from "@/flat/base";
import jest from "@/flat/jest";
import json from "@/flat/json";
import react from "@/flat/react";
import typescript from "@/flat/typescript";

const config = [...base, ...jest, ...json, ...react, ...typescript, prettierRecommended];

export default config;
