import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import styles from "./About.module.scss";
import uddhavDahalImg from "../../assets/uddhavImageAbout.jpeg";

const AboutComponent = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <img
            src={uddhavDahalImg}
            alt="Uddhav Dahal - Technical PM & Scrum Master"
          />
        </div>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>
            I'm Uddhav Dahal, a Certified Scrum Master and Technical Project
            Manager with over 6 years of experience managing software
            development projects across diverse industries.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <Calendar size={30} />
              </span>
              <span>
                <strong>Date of Birth:</strong> January 1, 1989
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <MapPin size={30} />
              </span>
              <span>
                <strong>Location:</strong> Kathmandu, Nepal
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <Mail size={30} />
              </span>
              <span>
                <strong>Email:</strong>{" "}
                <a href="mailto:you@example.com">you@example.com</a>
              </span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>
                <Phone size={30} />
              </span>
              <span>
                <strong>Phone:</strong> +977-984XXXXXXX
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
