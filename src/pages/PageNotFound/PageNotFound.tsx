import styles from "./PageNotFound.module.scss";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <AlertTriangle size={60} className={styles.icon} />
      <h1>404 - Page Not Found</h1>
      <p>Looks like you took a wrong turn. But don’t worry — we’re agile!</p>
      <Link to="/" className={styles.homeBtn}>Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;
