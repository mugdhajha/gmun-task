import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className={`${styles.herocon} ${theme === "dark" ? styles.dark : styles.light}`}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Global Model United Nations</h1>
        <p className={styles.subtitle}>
          Where Future Diplomats Rise to Tackle the Challenges of a Changing World
        </p>
        
        <button className={styles.actionbtn}>Join now</button>
       
      </motion.div>

      <div className={styles.right}>
        <div className={styles.spotlight}></div>

        <motion.div
          className={styles.logowrap}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className={styles.logoanim}
            animate={{
              scale: [1, 1.03, 1],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/gmun-logo.png"
              alt="GMUN Logo"
              width={500}
              height={500}
              className={styles.logopic}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
