import { useState } from "react";
// import Blog from "../../components/Cards/Blog"; // adjust path as needed
import styles from "./Blogs.module.scss";
import Blog from "../../components/Cards/Blog/Blog";

const dummyBlogs = [
  {
    title: "Leading with Empathy",
    description: "Why empathy is a core leadership skill in agile teams.",
    image: "https://picsum.photos/400/300?1",
    date: "May 25, 2025",
    category: "Leadership",
    readTime: "5 min read",
  },
  {
    title: "Scrum in Real Life",
    description: "How to apply scrum outside of software projects.",
    image: "https://picsum.photos/400/300?2",
    date: "May 20, 2025",
    category: "Agile",
    readTime: "4 min read",
  },
  {
    title: "Managing Scope Creep",
    description: "Tips for PMs to control scope and keep projects sane.",
    image: "https://picsum.photos/400/300?3",
    date: "May 15, 2025",
    category: "Project Management",
    readTime: "6 min read",
  },
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = dummyBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={styles.blogsSection}>
      <div className={styles.blogsWrapper}>
        <h2 className={styles.heading}>Latest Insights</h2>
        <input
          type="text"
          placeholder="Search blogs..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className={styles.blogGrid}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Blog key={index} {...blog} />
            ))
          ) : (
            <p className={styles.noResults}>No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
