import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.Section} id="contact">
      <h1 className={styles.Title}>Contact Us</h1>
      <h2 className={styles.SubTitle}>We'd love to hear from you.</h2>
    </section>
  );
};

export default Contact;
