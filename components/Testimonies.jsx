import { motion } from "framer-motion";
import styles from "../styles/Testimonies.module.css";
import { useTheme } from "next-themes";

const testimonials = [
  {
    name: "Ujjwal Singh",
    position: "Delegate, UNSC",
    quote: "GMUN was a transformative experience! I gained confidence and global perspective.",
    image: "/Ujjwal.jpg",
  },
  {
    name: "Shubham Mishra",
    position: "Best Delegate, WHO",
    quote: "The sessions were intense and inspiring. I made friends across the globe.",
    image: "/Shubham.jpg",
  },
  {
    name: "Ritika Jain",
    position: "Chair, UNHRC",
    quote: "Excellent organization and engaging debates. Truly world-class!",
    image: "/Ritika.jpg",
  },
];

export default function Testimonies() {
    const {theme}=useTheme();
  return (
    <section id="testimonials" className={`${styles.testimonials} ${theme === "dark" ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}>What Past Delegates Say</h2>
      <div className={styles.cards}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{scale:1.1}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <p className={styles.quote}>“{t.quote}”</p>
            <p className={styles.name}>{t.name}</p>
            <p className={styles.role}>{t.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
