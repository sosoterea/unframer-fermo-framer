import styles from "./Divider.module.css";

/** Full-width 1px hairline, matching the Framer "Page Divider". */
export function Divider() {
  return <hr className={styles.divider} aria-hidden="true" />;
}
