import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted Inter (variable) — no external font CDN, fully independent.
import "@fontsource-variable/inter";

import "@/styles/tokens.css";
import "@/styles/global.css";
import App from "@/App";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
