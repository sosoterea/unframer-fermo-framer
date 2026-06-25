import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// Phase 2 — fully independent React + Vite + TypeScript clone.
// No Framer / unframer runtime; only React, framer-motion (animation lib) and Vite.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5174,
  },
});
