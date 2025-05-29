import { Lightbulb, Heart, Repeat } from "lucide-react";
import styles from "./Values.module.scss";

const MyValues = [
  {
    title: "Clarity",
    icon: <Lightbulb size={40} />,
    description: "The clearer the plan, the better the execution.",
  },
  {
    title: "Empathy",
    icon: <Heart size={40} />,
    description: "Good teams build good products.",
  },
  {
    title: "Iterate",
    icon: <Repeat size={40} />,
    description: "Perfection is overrated. Ship, learn, improve.",
  },
];

const Values = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesWrapper}>
        <h2>My Values</h2>
        <p className={styles.subtitle}>
          Guiding principles that shape how I work.
        </p>
        <div className={styles.valuesList}>
          {MyValues.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
