import styles from "../styles/Footer.module.css";
import { FaInstagram, FaLinkedin, FaEnvelope,FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>GMUN IIT Kharagpur</h3>
          <p>Email: <a href="mailto:gmun@kgpian.iitkgp.ac.in">gmun@kgpian.iitkgp.ac.in</a></p>
          <p>Indian Institute of Technology, Kharagpur</p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/gmun.official/?hl=en" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/p/Global-MUN-IIT-Kharagpur-100088188648912/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            {/* <a href="https://in.linkedin.com/company/communiqu%C3%A9-iit-kharagpur" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a> */}
            <a href="mailto:gmun@kgpian.iitkgp.ac.in">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} GMUN IIT Kharagpur. All rights reserved.
      </div>
    </footer>
  );
}
