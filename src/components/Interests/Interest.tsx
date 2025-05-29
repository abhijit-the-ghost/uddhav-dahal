import { Gamepad, BookOpen, Globe, Code } from "lucide-react";
import styles from "./Interest.module.scss";

const MyInterests = [
  {
    title: "Gaming",
    icon: <Gamepad size={40} />,
  },
  {
    title: "Reading",
    icon: <BookOpen size={40} />,
  },
  {
    title: "Traveling",
    icon: <Globe size={40} />,
  },
  {
    title: "Coding",
    icon: <Code size={40} />,
  },
];

const Interest = () => {
  return (
    <section className={styles.interest}>
      <div className={styles.interestWrapper}>
        <h2 className={styles.interestHeading}>Interests</h2>
        <p className={styles.interestSubheading}>My Hobbies and Passions</p>
        <div className={styles.interestList}>
          {MyInterests.map((interest, index) => (
            <div key={index} className={styles.interestCard}>
              <div className={styles.interestIcon}>{interest.icon}</div>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;