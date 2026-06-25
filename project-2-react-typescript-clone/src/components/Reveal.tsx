import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger/entrance delay in seconds. */
  delay?: number;
  className?: string;
  /** Tag to render (defaults to div). */
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Scroll-triggered entrance animation — a gentle fade + rise, matching the
 * Framer "appear" feel. Disabled under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
