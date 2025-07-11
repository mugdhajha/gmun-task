import { motion } from "framer-motion";
import styles from "../styles/Events.module.css";
import { useTheme } from "next-themes";

const events = [
  {
    title: "GMUN workshop",
    date: "January 5, 2025",
    description: "Gear up for an insightful journey into the world of MUN!",
    image: "/workshop.jpg",
  },
  {
    title: "Opening ceremony",
    date: "January 10, 2025",
    description: "A fun and interactive Opening Ceremony, to mark the beginning of the Global Model United Nations Event",
    image: "/pastimg.jpg",
  },
  {
    title: "GMUN Day-1 and Day02",
    date: "January 11&12, 2025",
    description: "The community meetings and discussions.",
    image: "/pastimg.jpg",
  },
  {
    title: "Cultural Night",
    date: "January 11, 2025",
    description: "Come and have fun at our very own Cultural night.",
    image: "/cultural.jpg",
  },
];

export default function UpcomingEvents() {
    const {theme}=useTheme()

  return (
    <section id="events" className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}>
      <h2 className={styles.heading}> Past Events</h2>
      <div className={styles.cardGrid}>
        {events.map((event, idx) => (
          <motion.div
            className={styles.card}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{scale:1.1}}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={event.image} alt={event.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{event.title}</h3>
              <p className={styles.date}>{event.date}</p>
              <p className={styles.desc}>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
