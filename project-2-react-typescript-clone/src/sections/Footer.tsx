import { footer } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Divider } from "@/components/Divider";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.inner}>
        <Divider />
        <div className={styles.top}>
          <span className={styles.location}>{footer.location}</span>
          <ThemeToggle variant="switch" />
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {year} {footer.rights}
          </span>
          <span className={styles.credit}>
            Built in{" "}
            <a href={footer.builtWith.href} target="_blank" rel="noreferrer noopener">
              {footer.builtWith.label}
            </a>{" "}
            - By{" "}
            <a href={footer.author.href} target="_blank" rel="noreferrer noopener">
              {footer.author.label}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
