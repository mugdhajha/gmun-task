import styles from "../styles/Overview.module.css";
import { motion, scale } from "framer-motion";
import { useTheme } from "next-themes";

export default function Overview() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`${styles.overview} ${theme === "dark" ? styles.dark : styles.light}`}
    >
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About GMUN
      </motion.h2>

      <motion.p
        className={styles.mission}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        “GMUN, or Global Model United Nations, is a global platform where youth
        become future diplomats — engaging in negotiation, critical thinking,
        and debate on real-world challenges.”
      </motion.p>

      <motion.div
        className={styles.features}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{scale: 1.1}}
      >
        <div className={styles.featureBlock}>
          <h3>Our Objectives</h3>
          <ul>
            <li>Foster global awareness and critical thinking</li>
            <li>Develop leadership and public speaking skills</li>
            <li>Encourage international cooperation and diplomacy</li>
            <li>Promote youth involvement in world affairs</li>
          </ul>
        </div>
        <div className={styles.featureBlock}>
          <h3>What We Do</h3>
          <p>
            GMUN hosts international summits, simulations, workshops, and debates — empowering students to collaborate across cultures and shape global solutions through dialogue, leadership, and innovation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
