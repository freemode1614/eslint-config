import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    outDir: "./npm",
    format: ["esm", "cjs"],
    dts: true,
    shims: true,
    sourcemap: true,
    treeshake: true,
    clean: isProduction,
    minify: isProduction,
  },
]);
