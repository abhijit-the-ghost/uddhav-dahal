import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AdminLayout.module.scss";

const AdminLayout = () => {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <main className={styles.adminMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
