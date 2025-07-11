import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Background.module.css";

export default function Background() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        variants={bgVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className={`${styles.bgWrapper}`}
      >
        <div className={`${styles.bgImage} ${theme === "dark" ? styles.dark : styles.light}`} />
      </motion.div>
    </AnimatePresence>
  );
}

