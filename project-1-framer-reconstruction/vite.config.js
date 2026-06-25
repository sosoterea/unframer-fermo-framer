import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Phase 1 — Framer template reconstruction.
// The exported Framer/unframer modules are plain ES modules that import
// `react`, `react-dom`, `react/jsx-runtime` and `framer-motion`. We dedupe
// those so the bundled `_framer-runtime.js` and our app share one instance.
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "framer-motion"],
  },
  server: {
    host: true,
    port: 5173,
  },
});
