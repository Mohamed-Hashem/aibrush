import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-icons": ["lucide-react"],
        },
      },
    },
    target: "esnext",
    minify: "esbuild",
    cssMinify: "esbuild",
    cssCodeSplit: true,
  },
});
