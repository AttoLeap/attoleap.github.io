import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";

export default defineConfig({
  ssr: true,
  server: {
    prerender: {
      routes: ["/"],
      crawlLinks: true
    },
    preset: "github-pages"
  },
  vite: {
    plugins: [UnoCSS()]
  }
});
