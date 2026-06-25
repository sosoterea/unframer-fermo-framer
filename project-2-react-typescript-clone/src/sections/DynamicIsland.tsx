import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";
import { islandStatus, profile } from "@/data/content";
import { useClock } from "@/hooks/useClock";
import styles from "./DynamicIsland.module.css";

/**
 * Dynamic island pinned flush to the top edge: avatar, name/role and a live
 * clock. Click (or Enter/Space) expands it to reveal the weather + availability
 * status — a click-to-expand interaction matching the Framer original.
 */
export function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);
  const time = useClock();

  const toggle = () => setExpanded((v) => !v);

  return (
    <div className={styles.slot}>
      <motion.div
        className={styles.island}
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={`${profile.name}, ${profile.role}. ${time}. Toggle status details.`}
      >
        <motion.div className={styles.top} layout="position">
          <img className={styles.avatar} src={avatar} alt={profile.avatarAlt} />
          <div className={styles.identity}>
            <span className={styles.name}>{profile.name}</span>
            <span className={styles.role}>{profile.role}</span>
          </div>
          <span className={styles.time}>{time}</span>
        </motion.div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className={styles.details}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
            >
              <div className={styles.detailsInner}>
                <span className={styles.weather}>
                  {islandStatus.location} · {islandStatus.temperature} · {islandStatus.condition}
                </span>
                <span className={styles.status} data-online={islandStatus.available}>
                  <span className={styles.dot} aria-hidden="true" />
                  {islandStatus.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
