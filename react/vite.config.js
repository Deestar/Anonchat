import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "anonchat",
    rollupOptions: {
      input: {
        main: __dirname + "/index.html",
      },
      output: {
        dir: __dirname + "/anonchat",
        assetFileNames: "img/[name].[ext]",
      },
    },
  },
});
