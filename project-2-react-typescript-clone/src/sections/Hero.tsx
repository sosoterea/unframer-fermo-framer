import { Fragment } from "react";
import { hero } from "@/data/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Introduction">
      <Reveal>
        <h1 className={styles.greeting}>{hero.greeting}</h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className={styles.intro}>
          {hero.introLines.map((line, li) => (
            <span className={styles.line} key={li}>
              {line.map(({ text, icon: Icon }, i) => (
                <Fragment key={i}>
                  <span>{text}</span>
                  {Icon && <Icon className={styles.inlineIcon} weight="regular" aria-hidden="true" />}
                  {i < line.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          ))}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className={styles.ctas}>
          {hero.ctas.map((cta) => (
            <Button key={cta.label} cta={cta} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
