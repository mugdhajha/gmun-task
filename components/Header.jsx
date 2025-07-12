import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Header.module.css";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true); // Wait until mounted to access theme
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!mounted) return null; 

  return (
    <header className={`${styles.header} ${theme === "dark" ? styles.dark : styles.light}`}>
      <div className={styles.logo}>
        <img
          src="/gmun-logo.png"
          alt="logo"
        />
      </div>

      <div className={styles.seperator}>
        {isMobile && (
          <div
            className={`${styles.burger} ${isOpen ? styles.openBurger : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <AnimatePresence>
          {(isOpen || !isMobile) && (
            <motion.nav
              className={`${styles.nav} ${isMobile && isOpen ? styles.open : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
