import LayoutIsland from "./framer/LayoutIsland.tsx";
import ResponsiveWrapper from "./framer/ResponsiveWrapper.tsx";

import DynamicInfo from "./framer/DynamicInfo.js";
import Navigation from "./framer/Navigation.js";
import Hero from "./framer/Hero.js";
import Experience from "./framer/Experience.js";
import Works from "./framer/Works.js";
import Footer from "./framer/Footer.js";
import PageDivider from "./framer/PageDivider.js";

// Framer variant ids for the responsive Footer (Desktop / Desktop L / Tablet / Phone).
const FOOTER_VARIANTS = {
  base: "BjHXoEuJB", // Phone   (0+)
  md: "B0E0oMPXT", // Tablet  (810+)
  lg: "CHWCP6Vpz", // Desktop (1200+)
  xl: "CwsFJHwTM", // Desktop L (1440+)
};

// Navigation switches to its horizontal "Navigation mobile" variant below the
// tablet breakpoint (the published site uses a ~208x48 bottom pill there) and
// the vertical collapsing rail at >=810px.
const NAV_VARIANTS = {
  base: "oPKpRVUxz", // Navigation mobile (0+)
  md: "Ixlvz7SuN", // Navigation (vertical rail, 810+)
};

export default function App() {
  return (
    <div className="page">
      {/* Fixed dynamic-island header */}
      <div className="island-slot">
        <LayoutIsland>
          <DynamicInfo />
        </LayoutIsland>
      </div>

      {/* Fixed left navigation rail (vertical) / bottom pill (mobile) */}
      <div className="nav-slot">
        <LayoutIsland>
          <ResponsiveWrapper Component={Navigation} variants={NAV_VARIANTS} />
        </LayoutIsland>
      </div>

      {/* Centred content column */}
      <main className="content">
        <section className="section-block" id="home">
          <LayoutIsland>
            <Hero />
          </LayoutIsland>
        </section>

        <div className="section-block">
          <LayoutIsland>
            <PageDivider />
          </LayoutIsland>
        </div>

        <section className="section-block" id="experience">
          <LayoutIsland>
            <Experience />
          </LayoutIsland>
        </section>

        <div className="section-block">
          <LayoutIsland>
            <PageDivider />
          </LayoutIsland>
        </div>

        <section className="section-block" id="works">
          <LayoutIsland>
            <Works />
          </LayoutIsland>
        </section>
      </main>

      {/* Full-width footer with viewport-driven variant */}
      <div className="footer-slot" id="footer">
        <LayoutIsland>
          <ResponsiveWrapper Component={Footer} variants={FOOTER_VARIANTS} />
        </LayoutIsland>
      </div>
    </div>
  );
}
