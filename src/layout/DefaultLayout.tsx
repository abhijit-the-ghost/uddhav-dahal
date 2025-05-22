import { Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";
import logo from "../assets/profile-pic.png";

const DefaultLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.navbar}>
        <div className={styles.navWrapper}>
          <Link to="/" className={styles.logo}>
            <img
              src={logo}
              alt="Uddhav Dahal Logo"
              className={styles.logoImage}
            />
            <span>Uddhav Dahal</span>
          </Link>
          <nav className={styles.desktopMenu}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <button
            className={styles.mobileToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.icon}>{isMenuOpen ? "✖" : "☰"}</span>
          </button>
        </div>
        {isMenuOpen && (
          <nav className={styles.mobileMenu}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Uddhav Dahal. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://github.com " target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com " target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
