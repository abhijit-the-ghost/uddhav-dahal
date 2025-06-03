import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  BookOpen,
  MessageSquare,
  Briefcase,
  Star,
  Heart,
} from "lucide-react";
import styles from "./Sidebar.module.scss";
import logo from '../../assets/profile-pic.png'

const Sidebar = () => {
  const navItems = [
    { to: "/admin", label: "Dashboard", icon: <Home size={18} /> },
    { to: "/admin/interests", label: "Interests", icon: <Heart size={18} /> },
    { to: "/admin/skills", label: "Skills", icon: <Star size={18} /> },
    { to: "/admin/experience", label: "Experience", icon: <Briefcase size={18} /> },
    { to: "/admin/blog", label: "Blog", icon: <BookOpen size={18} /> },
    { to: "/admin/messages", label: "Messages", icon: <MessageSquare size={18} /> },
    { to: "/admin/profile", label: "Profile", icon: <User size={18} /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.nav}>
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            to={to}
            key={to}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
