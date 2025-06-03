import styles from "./HireMe.module.scss";
import { Mail, Download } from "lucide-react";

const HireMe = () => {
  const skills = [
    "Agile & Scrum Coaching",
    "Project Management",
    "Data Analysis",
    "Jira / Confluence",
    "Team Leadership",
    "CI/CD Optimization",
  ];

  return (
    <section className={styles.hireMeSection}>
      <div className={styles.hireMeContainer}>
        <h2>Let's Collaborate</h2>
        <p>
          Certified Scrum Master & Technical Project Manager with 6+ years in software development.
        </p>

        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.ctaButtons}>
          <a href="/resume/UddhavDahal_Resume.pdf" download className={styles.downloadBtn}>
            <Download size={20} /> Resume
          </a>
          <a href="#contact" className={styles.contactBtn}>
            <Mail size={20} /> Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;