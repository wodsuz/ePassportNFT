import React from "react";
import styles from "./Contact.module.scss";
import { Akaya_Telivigala, Outfit, Sora } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const akaya = Akaya_Telivigala({ subsets: ["latin"], weight: ["400"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Contact = () => {
  return (
    <section className={styles.Section} id="contact">
      <h1 className={styles.Title}>Contact Us</h1>
      <h2 className={styles.SubTitle}>We'd love to hear from you.</h2>

      <form className={styles.Form}>
        <div className={styles.MainDiv}>
          <input
            type="email"
            placeholder="Email"
            className={outfit.className}
            required
          />
        </div>
        <div className={styles.MainDiv}>
          <textarea
            placeholder="Your Message"
            className={outfit.className}
            required
            rows={5}
            maxLength={200}
          ></textarea>
        </div>
        <div className={styles.MainDiv}>
          <button type="submit" className={styles.SubmitButton}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
