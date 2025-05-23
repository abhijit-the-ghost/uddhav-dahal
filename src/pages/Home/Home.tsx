import About from "../../components/About/About";
import Blog from "../../components/Cards/Blog/Blog";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import styles from "./Home.module.scss";

const Blogs = [
  {
    title: "Agile Practices",
    description: "How Agile helps teams deliver better software faster",
    image: "",
  },
];

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
      <section className={styles.blog}>
        <div className={styles.blogWrapper}>
          <h1>Blogs</h1>
          <div className={styles.blogCards}>
            <Blog
              title="Agile Practices"
              description="How Agile helps teams deliver better software faster."
            />
            <Blog
              title="Data Visualization Tips"
              description="Turning complex data into clear insights with Power BI."
            />
            <Blog
              title="Project Planning 101"
              description="Key strategies for managing timelines and resources."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
