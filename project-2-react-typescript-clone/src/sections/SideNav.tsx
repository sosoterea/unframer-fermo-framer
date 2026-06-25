import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/content";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/utils/scroll";
import styles from "./SideNav.module.css";

export function SideNav() {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  // Keyboard shortcuts 1–4 jump to the matching section.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      const item = navItems.find((n) => n.shortcut === e.key);
      if (item) {
        e.preventDefault();
        scrollToSection(item.target);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (isMobile) {
    return (
      <nav className={styles.slot} aria-label="Primary">
        <div className={styles.mobileBar}>
          {navItems.map(({ label, target, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className={styles.mobileButton}
              aria-label={label}
              onClick={() => scrollToSection(target)}
            >
              <Icon weight="regular" />
            </button>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.slot} aria-label="Primary">
      <motion.div
        className={styles.rail}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        layout
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
      >
        <ul className={styles.list}>
          {navItems.map(({ label, shortcut, target }) => (
            <li key={label}>
              <button
                type="button"
                className={styles.item}
                onClick={() => scrollToSection(target)}
              >
                <motion.span
                  className={styles.label}
                  animate={{
                    width: hovered ? "auto" : 0,
                    opacity: hovered ? 1 : 0,
                    marginRight: hovered ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                >
                  {label}
                </motion.span>
                <span className={styles.badge}>{shortcut}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
