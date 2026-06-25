import ReactDOM from "react-dom/client";
import { FetchClientProvider } from "./framer/_framer-runtime.js";
import "./framer/tokens.css";
import "./index.css";
import App from "./App.jsx";

// The Framer/unframer exports expect the runtime providers a published Framer
// page sets up at its root (data-fetch client, etc.). We mount the minimal
// provider tree those components consume.
//
// NB: StrictMode is intentionally omitted — its double-invocation in dev
// disrupts the Framer runtime's variant/gesture initialisation and
// framer-motion layout measurement, which the interactive island and nav
// rely on to settle into their collapsed resting states.
ReactDOM.createRoot(document.getElementById("root")).render(
  <FetchClientProvider>
    <App />
  </FetchClientProvider>,
);
