import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  target: "esnext",
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  bundle: true,
});
