import { motion } from "framer-motion";
import type { CallToAction } from "@/types";
import styles from "./Button.module.css";

interface ButtonProps {
  cta: CallToAction;
}

/** Pill call-to-action link (primary = solid, secondary = outlined). */
export function Button({ cta }: ButtonProps) {
  const { label, href, variant, external } = cta;
  return (
    <motion.a
      className={`${styles.button} ${styles[variant]}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {label}
    </motion.a>
  );
}
