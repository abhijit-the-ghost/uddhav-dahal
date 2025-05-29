import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import styles from "./Contact.module.scss";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // Enable real-time validation
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus(null), 3000); // Clear message after 3s
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={styles.contactContainer}
      aria-labelledby="contact-heading"
    >
      <header>
        <h2 id="contact-heading" className={styles.contactHeading}>
          Contact
        </h2>
        <p className={styles.contactSubHeading}>
          Have a project in mind? Let's make it possible
        </p>
      </header>
      <div className={styles.contact}>
        <div className={styles.contactDetails}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <Mail size={30} />
            </span>
            <span>uddhav.dahal@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <Phone size={30} />
            </span>
            <span>+977-9812345678</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <MapPin size={30} />
            </span>
            <span>Kathmandu, Nepal</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <Linkedin size={30} />
            </span>
            <a
              href="https://linkedin.com/in/uddhavdahal"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <form
          className={styles.contactForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className={errors.name ? styles.errorInput : ""}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className={styles.errorText}>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={errors.email ? styles.errorInput : ""}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.errorText}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              {...register("message")}
              rows={5}
              className={errors.message ? styles.errorInput : ""}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className={styles.errorText}>
                {errors.message.message}
              </span>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="submit"
              disabled={isSubmitting || !isDirty}
              className={isSubmitting ? styles.submitting : ""}
              aria-label="Submit contact form"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <button
              type="button"
              onClick={() => reset()}
              disabled={!isDirty}
              className={styles.resetButton}
              aria-label="Reset form"
            >
              Reset
            </button>
          </div>

          {submitStatus === "success" && (
            <p className={styles.successMessage} role="alert">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className={styles.errorMessage} role="alert">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
