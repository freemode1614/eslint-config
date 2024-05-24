import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig([
  {
    entry: ["./src/flat.ts", "./src/legacy.ts"],
    outDir: "./npm",
    format: ["esm", "cjs"],
    dts: false,
    shims: true,
    sourcemap: false,
    treeshake: true,
    clean: isProduction,
    minify: isProduction,
  },
]);
