import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.Section}>
      <div className={styles.ImgContainer}>
        <img src="../assets/Nfts/bighead.svg" alt="The Weirdos" />
        <img src="../assets/Nfts/bighead-1.svg" alt="The Weirdos" />
        <img src="../assets/Nfts/bighead-2.svg" alt="The Weirdos" />
        <img src="../assets/Nfts/bighead-3.svg" alt="The Weirdos" />
        <img src="../assets/Nfts/bighead-4.svg" alt="The Weirdos" />
      </div>
      <h1 className={styles.Title}>
        Join the <br /> weirdos club{" "}
      </h1>
      <div className={styles.BtnContainer}>
        <button className={styles.JoinNow}>Join Now</button>
      </div>
    </section>
  );
};

export default Banner;
