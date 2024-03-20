import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";

esbuild.build({
  entryPoints: ["dist/worker/src/worker.js"],
  bundle: true,
  format: "esm",
  minify: true,
  outfile: "dist/worker/src/worker.mjs",
  plugins: [babel()],
});
