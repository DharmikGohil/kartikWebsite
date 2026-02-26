import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Core static routes to prerender (high-priority pages)
const coreRoutes = [
  "/",
  "/foam-control-engineering",
  "/solutions",
  "/technologies",
  "/sustainability",
  "/about",
  "/contact",
  "/blog",
  "/request-pricing",
  "/privacy-policy",
  "/terms",
  "/locations",
  "/chemistry",
  "/foam-problems",
  "/global",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: resolve(__dirname, "dist"),
      routes: coreRoutes,
      renderer: {
        renderAfterTime: 3000,
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          seo: ["react-helmet-async"],
          ui: ["lucide-react"],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
  },
});
