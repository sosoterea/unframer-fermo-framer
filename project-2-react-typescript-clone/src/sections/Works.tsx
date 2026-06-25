import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { works } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import monitorStand from "@/assets/monitor-stand.svg";
import styles from "./Works.module.css";

const CYCLE_MS = 3200;

export function Works() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const projects = works.projects;

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [projects.length, reduce]);

  const current = projects[index];

  return (
    <section id="works" className={styles.works} aria-label="Works">
      <Reveal>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {works.heading}
            <ArrowUpRightIcon className={styles.arrow} weight="bold" aria-hidden="true" />
          </h2>
          <span className={styles.caption}>{works.caption}</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className={styles.display}>
          <div className={styles.screen}>
            <div className={styles.screenInner}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={current.image}
                  className={styles.shot}
                  src={current.image}
                  alt={current.alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
          </div>
          <img className={styles.stand} src={monitorStand} alt="" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
