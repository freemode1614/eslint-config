import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig([
  {
    name: "eslint-config",
    entry: ["./src/flat.ts", "./src/legacy.ts"],
    outDir: "./npm",
    format: ["esm"],
    sourcemap: false,
    clean: isProduction,
  },
]);
