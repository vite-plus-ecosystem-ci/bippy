import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [remix()],
});
