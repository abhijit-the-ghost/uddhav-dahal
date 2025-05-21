import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import styles from "./Hero.module.scss";
import { useEffect, useState } from "react";
import uddhavDahalImage from '../../assets/uddhavDahal.jpeg'

const Hero = () => {
  const [typedText, setTypedText] = useState("");

  const roles = ["Technical Project Manager", "Data Analyst", "Scrum Master"];
  let roleIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typeWriter = () => {
      if (charIndex < roles[roleIndex].length) {
        setTypedText(roles[roleIndex].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          roleIndex = (roleIndex + 1) % roles.length;
          setTypedText("");
          typeWriter();
        }, 2000);
      }
    };

    typeWriter();

    return () => clearTimeout();
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroText}>
        <p className={styles.heroHello}>Hi, I’m</p>
        <h1>Uddhav Dahal</h1>
        <h3 className={styles.typedText}>
          {typedText}<span className={styles.cursor}>|</span>
        </h3>
        <p>
          With over 6 years of experience in the software industry, I'm adept at steering projects from conception to completion, ensuring they exceed expectations.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/uddhavdahal " target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={30} />
          </a>
          <a href="https://github.com/uddhavdahal " target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={30} />
          </a>
          <a href="https://twitter.com/uddhavdahal " target="_blank" rel="noopener noreferrer" title="Twitter">
            <Twitter size={30} />
          </a>
          <a href="https://twitter.com/uddhavdahal " target="_blank" rel="noopener noreferrer" title="Twitter">
            <Youtube size={30} />
          </a>
        </div>
        {/* Optional CTA */}
        {/* <button className={styles.ctaButton}>Download Resume</button> */}
      </div>

      <div className={styles.heroImage}>
        <img src={uddhavDahalImage} alt="Uddhav Dahal - Technical PM & Scrum Master" />
      </div>
      </div>

    </div>
  );
};

export default Hero;