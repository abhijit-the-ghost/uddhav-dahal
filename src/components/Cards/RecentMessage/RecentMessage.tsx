import type { IRecentMessage } from "../../../interface/IMessage";
import styles from "./RecentMessage.module.scss";

const RecentMessage = ({ name, email, message }: IRecentMessage) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.email}>{email}</p>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default RecentMessage;
