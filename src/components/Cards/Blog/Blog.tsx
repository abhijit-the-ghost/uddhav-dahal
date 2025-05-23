import styles from "./Blog.module.scss";

const Blog = ({
  title = "Blog Title",
  description = "Short description goes here...",
  image = "https://picsum.photos/200/300",
  date = "May 23, 2025",
}) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.blogImage} />
      </div>
      <div className={styles.blogContent}>
        <h4 className={styles.blogTitle}>{title}</h4>
        <p className={styles.blogDescription}>{description}</p>
        <p className={styles.blogDate}>{date}</p>
      </div>
    </div>
  );
};

export default Blog;
