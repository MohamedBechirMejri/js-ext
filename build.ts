import dts from "bun-plugin-dts";
import fs from "fs";

await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./.build",
  plugins: [dts()],
});

// merge ./.build/index.d.ts with ./types/globals.d.ts
const indexDts = fs.readFileSync("./.build/index.d.ts", "utf8");
const globalsDts = fs.readFileSync("./types/globals.d.ts", "utf8");
const mergedDts = indexDts + "\n" + globalsDts;
fs.writeFileSync("./.build/index.d.ts", mergedDts);
