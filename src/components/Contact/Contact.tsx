import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./Contact.module.scss";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // Example: send to backend or show a toast
    reset();
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactSectionWrapper}>
        {/* LEFT: Contact Form */}
        <div className={styles.contactForm}>
          <h2>Contact</h2>
          <h3>Have A Project In Mind? Let&apos;s Make it Successful</h3>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">YourEmail*</label>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message*</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                {...register("message")}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT: Static Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>
          <h3>Let’s connect and collaborate!</h3>

          <div className={styles.contactList}>
            <div className={styles.contactDetail}>
              <span className={styles.icon}>
                <Mail size={35} />
              </span>
              <span className={styles.text}>mail@mail.com</span>
            </div>
            <div className={styles.contactDetail}>
              <span className={styles.icon}>
                <Phone size={35} />
              </span>
              <span className={styles.text}>+977-984XXXXXXX</span>
            </div>
            <div className={styles.contactDetail}>
              <span className={styles.icon}>
                <MapPin size={35} />
              </span>
              <span className={styles.text}>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
