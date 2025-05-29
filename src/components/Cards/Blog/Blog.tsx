import { useNavigate } from "react-router-dom";
import styles from "./Blog.module.scss";

const Blog = ({
  title = "Blog Title",
  description = "Short description goes here...",
  image = "https://picsum.photos/400/300",
  date = "May 23, 2025",
  category = "Leadership",
  readTime = "4 min read",
}) => {
  const navigate = useNavigate();

  const handleBlogNavigate = () => {
    navigate("/blog");
  };

  return (
    <div className={styles.blogCard} onClick={handleBlogNavigate}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.blogImage} />
        <span className={styles.categoryTag}>{category}</span>
      </div>
      <div className={styles.blogContent}>
        <h4 className={styles.blogTitle}>{title}</h4>
        <p className={styles.meta}>
          {date} · {readTime}
        </p>
        <p className={styles.blogDescription}>{description}</p>
        <span className={styles.readMore}>Read More →</span>
      </div>
    </div>
  );
};

export default Blog;
