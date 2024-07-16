import base from "@/flat/base";
import jest from "@/flat/jest";
import json from "@/flat/json";
import react from "@/flat/react";
import typescript from "@/flat/typescript";

const i = 12;

console.log(i)

const config = [...base, ...jest, ...json, ...react, ...typescript];

export default config;
