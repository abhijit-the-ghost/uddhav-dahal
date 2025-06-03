import RecentMessage from "../../components/Cards/RecentMessage/RecentMessage";
import styles from "./Dashboard.module.scss";
import { BookOpen, MessageSquare, Star } from "lucide-react";

const mockRecentMessage = [
  {
    name: "Ghost",
    email: "mail@gmail.com",
    message: "Hello, i loved your portfolio",
  },
  {
    name: "John Doe",
    email: "doe@john.com",
    message: "Hello, i want to talk about project management with you.",
  },
];



const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <h1 className={styles.heading}>
        Welcome <span>Uddhav Dahal</span>
      </h1>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <Star size={28} />
          <div>
            <h3>Skills</h3>
            <p>12</p>
          </div>
        </div>
        <div className={styles.card}>
          <BookOpen size={28} />
          <div>
            <h3>Blog Posts</h3>
            <p>8</p>
          </div>
        </div>
        <div className={styles.card}>
          <MessageSquare size={28} />
          <div>
            <h3>Messages</h3>
            <p>4</p>
          </div>
        </div>
      </div>

      <div className={styles.quickSection}>
        <h2>Quick Actions</h2>
        <div className={styles.actions}>
          <button>Add Blog</button>
          <button>Add Skill</button>
          <button>View Messages</button>
        </div>
      </div>

      <div className={styles.recent}>
        <h2>Recent Messages</h2>
        <div className={styles.recentMessagesWrapper}>
        {mockRecentMessage.map((recentMessage, index)=>(
          <RecentMessage id={index} key={index} message={recentMessage.message} email={recentMessage.email} name={recentMessage.name} />
        ) )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
