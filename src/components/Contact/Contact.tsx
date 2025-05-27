import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Contact.module.scss";

// Define form data structure
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data Submitted:", data);
    // You can send this data to your backend or API
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2>Contact Me</h2>
        <form
          className={styles.contactForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`${styles.formInput} ${
                  errors.name ? styles.inputError : ""
                }`}
                required
              />
              <label htmlFor="name" className={styles.floatingLabel}>
                Your Name
              </label>
              {errors.name && (
                <p className={styles.errorText}>{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`${styles.formInput} ${
                  errors.email ? styles.inputError : ""
                }`}
                required
              />
              <label htmlFor="email" className={styles.floatingLabel}>
                Your Email
              </label>
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                {...register("message")}
                className={`${styles.formInput} ${
                  errors.message ? styles.inputError : ""
                }`}
                rows={5}
                required
              />
              <label htmlFor="message" className={styles.floatingLabelMessage}>
                Your Message
              </label>
              {errors.message && (
                <p className={styles.errorText}>{errors.message.message}</p>
              )}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
