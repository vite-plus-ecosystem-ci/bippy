import { resolve } from "node:path";
import { defineConfig } from "vite-plus";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "index.html"),
        concurrent: resolve(import.meta.dirname, "concurrent.html"),
      },
    },
  },
});
