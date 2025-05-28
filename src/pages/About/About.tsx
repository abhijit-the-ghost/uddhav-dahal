import AboutComponent from "../../components/About/About";
import styles from "./About.module.scss";

const About = () => {
  const experiences = [
    {
      role: "Technical Project Manager & Data Analyst",
      company: "Insight Workshop",
      duration: "2021 - Present",
      location: "Remote / Kathmandu, Nepal",
      description:
        "Managing technical projects end-to-end, facilitating Agile ceremonies, and providing data-driven insights to drive product decisions.",
    },
    {
      role: "Project Coordinator",
      company: "Tech Company Pvt. Ltd.",
      duration: "2019 - 2021",
      location: "Kathmandu, Nepal",
      description:
        "Coordinated software development teams, managed timelines, and ensured smooth communication between stakeholders.",
    },
    {
      role: "Junior Project Assistant",
      company: "SoftTech Solutions",
      duration: "2017 - 2019",
      location: "Kathmandu, Nepal",
      description:
        "Supported senior project managers in planning and execution of web and mobile application development projects.",
    },
  ];

  return (
    <>
      <section>
        <AboutComponent />
      </section>
      <section className={styles.experience}>
        <h2 className={styles.experienceHeading}>My Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <h4>{exp.company} — {exp.duration}</h4>
                <p className={styles.location}>{exp.location}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;