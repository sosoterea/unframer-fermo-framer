import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  /** "button" = icon button (nav rail), "switch" = sliding track (footer). */
  variant?: "button" | "switch";
}

export function ThemeToggle({ variant = "button" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  if (variant === "switch") {
    return (
      <button
        type="button"
        className={styles.switch}
        role="switch"
        aria-checked={isDark}
        aria-label={label}
        onClick={toggleTheme}
        data-state={isDark ? "dark" : "light"}
      >
        <motion.span
          className={styles.knob}
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
        >
          {isDark ? <MoonIcon weight="fill" /> : <SunIcon weight="fill" />}
        </motion.span>
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      className={styles.iconButton}
      aria-label={label}
      onClick={toggleTheme}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {isDark ? <MoonIcon weight="fill" /> : <SunIcon weight="fill" />}
    </motion.button>
  );
}
