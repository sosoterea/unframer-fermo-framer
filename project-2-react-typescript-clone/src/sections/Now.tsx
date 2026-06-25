import { experience } from "@/data/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import styles from "./Now.module.css";

export function Now() {
  return (
    <section id="experience" className={styles.now} aria-label="Now">
      <Reveal>
        <h2 className={styles.heading}>{experience.heading}</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className={styles.body}>
          {experience.before}
          <span className={styles.highlight}>{experience.highlight}</span>
          {experience.after}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className={styles.ctas}>
          {experience.ctas.map((cta) => (
            <Button key={cta.label} cta={cta} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
