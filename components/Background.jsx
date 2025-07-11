// components/Background.js
import { useTheme } from "next-themes";
import styles from "../styles/Background.module.css";

export default function Background() {
  const { theme } = useTheme();

  return (
    <div className={styles.bgWrapper}>
      <div
        className={`${styles.bgImage} ${
          theme === "dark" ? styles.darkTheme : styles.lightTheme
        }`}
      />
    </div>
  );
}
