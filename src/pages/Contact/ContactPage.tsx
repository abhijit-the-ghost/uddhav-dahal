import Contact from "../../components/Contact/Contact";
import styles from "./Contact.module.scss";

const ContactPage = () => {
  return (
    <>
      <div className={styles.contactPage}>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
