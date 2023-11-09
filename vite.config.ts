import { defineConfig } from "vite";
import path from "node:path";
import vitePluginTemplate from "./vite-plugin-template";

export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vitePluginTemplate()],
  server: {
    port: 8090,
    open: false,
  },
});
