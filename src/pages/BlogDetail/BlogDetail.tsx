import styles from "./BlogDetail.module.scss";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    conclusion: string;
  };
  image: string;
}

const BlogDetail = () => {
  const blogPost: BlogPost = {
    title: "Why Project Management is Important",
    date: "May 26, 2025",
    author: "Uddhav Dahal",
    content: {
      introduction:
        "Effective project management is the backbone of successful projects, whether in tech, construction, or creative industries. It ensures that goals are met on time, within budget, and to the satisfaction of stakeholders. In this article, we explore the key reasons why project management is critical to organizational success.",
      sections: [
        {
          heading: "1. Aligns Projects with Business Goals",
          body: [
            "Project management ensures that every project aligns with the organization's strategic objectives. By defining clear goals and deliverables, project managers create a roadmap that keeps teams focused on what matters most.",
            "Without proper alignment, projects can drift, wasting resources and failing to deliver value. A skilled project manager bridges the gap between high-level strategy and day-to-day execution.",
          ],
        },
        {
          heading: "2. Optimizes Resource Utilization",
          body: [
            "Resources—whether time, money, or talent—are finite. Project management optimizes their use by prioritizing tasks, allocating resources efficiently, and minimizing waste.",
            "Techniques like resource leveling and critical path analysis help ensure that teams are neither overburdened nor underutilized, maximizing productivity.",
          ],
        },
        {
          heading: "3. Enhances Communication and Collaboration",
          body: [
            "Clear communication is vital for project success. Project managers facilitate collaboration by setting up regular check-ins, defining roles, and ensuring transparency across teams.",
            "Tools like Kanban boards, Gantt charts, and collaboration platforms (e.g., Trello, Asana) streamline communication, keeping everyone on the same page.",
          ],
        },
        {
          heading: "4. Mitigates Risks",
          body: [
            "Every project faces risks, from scope creep to unexpected delays. Project management involves proactive risk identification and mitigation strategies to keep projects on track.",
            "By anticipating challenges and preparing contingency plans, project managers reduce the likelihood of costly setbacks.",
          ],
        },
      ],
      conclusion:
        "Project management is not just about meeting deadlines—it's about delivering value, fostering collaboration, and driving success. By aligning projects with goals, optimizing resources, enhancing communication, and mitigating risks, project management transforms ideas into reality. Investing in strong project management practices is essential for any organization aiming to thrive in a competitive landscape.",
    },
    image:
      "https://events.mercer.edu/wp-content/uploads/sites/3/2025/04/Project-Management-image-2.jpg",
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>{blogPost.title}</h1>
          <div className={styles.blogMeta}>
            <span>By {blogPost.author}</span>
            <span>{blogPost.date}</span>
          </div>
        </header>

        <img
          src={blogPost.image}
          alt="Project Management"
          className={styles.blogImage}
        />

        <article className={styles.blogContent}>
          <p className={styles.introduction}>{blogPost.content.introduction}</p>

          {blogPost.content.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className={styles.sectionParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className={styles.conclusion}>
            <h2 className={styles.sectionHeading}>Conclusion</h2>
            <p>{blogPost.content.conclusion}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetail;
