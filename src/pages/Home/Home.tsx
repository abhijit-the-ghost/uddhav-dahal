import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section className={styles.banner}>
        <div className={styles.myStats}>
          <div className={styles.statItem}>
            <h2>10+</h2>
            <p>Certificate</p>
          </div>
          <div className={styles.statItem}>
            <h2>7+</h2>
            <p>Years of Experience</p>
          </div>
          <div className={styles.statItem}>
            <h2>50+</h2>
            <p>Projects Delivered</p>
          </div>

          <div className={styles.statItem}>
            <h2>2353</h2>
            <p>Cup Of Coffee</p>
          </div>
        </div>
      </section>
      <section>blogs</section>
    </>
  );
};

export default Home;