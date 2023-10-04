// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [
    vue(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/tablepi.js"),
      name: "TablePI",
      // the proper extensions will be added
      fileName: "tablepi",
      formats: ["es", "cjs"],
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true, 
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        manualChunks: undefined,
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
