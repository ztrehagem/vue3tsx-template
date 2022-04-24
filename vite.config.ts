import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  root: path.resolve("src"),

  envDir: path.resolve(),

  publicDir: path.resolve("public"),

  plugins: [vue(), vueJsx(), vanillaExtractPlugin()],

  build: {
    outDir: path.resolve("dist"),
    emptyOutDir: true,
  },
});
