import styles from "./SkillsCard.module.scss";

const SkillsCard = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
