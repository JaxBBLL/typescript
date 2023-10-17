import type { PluginOption } from "vite";
import path from "node:path";
import fs from "node:fs";

export default function vitePluginTemplate(): PluginOption {
  return {
    name: "vite-plugin-template",
    // apply: "build", // build | serve
    async writeBundle() {
      const filePath = path.join(__dirname, "/dist");
    },
    async transform(code, id) {
      if (id.endsWith(".txt")) {
        const ret = fs.readFileSync(id, "utf-8");
        return {
          code: `export default ${JSON.stringify(ret)}`,
          map: null,
        };
      }
    },
  };
}
