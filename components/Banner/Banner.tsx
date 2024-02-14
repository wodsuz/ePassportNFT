import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.Section}>
      <div className={styles.ImgContainer}>
        <img
          src="../assets/Nfts/Group 1.svg"
          alt="Banner first ePassport Image"
        />
        <img
          src="../assets/Nfts/Group 2.svg"
          alt="Banner second ePassport Image"
        />
        <img
          src="../assets/Nfts/Group 3.svg"
          alt="Banner third ePassport Image"
        />
        <img
          src="../assets/Nfts/Group 4.svg"
          alt="Banner fourth ePassport Image"
        />
        <img
          src="../assets/Nfts/Group 11.svg"
          alt="Banner fifth ePassport Image"
        />
        <img
          src="../assets/Nfts/Group 7.svg"
          alt="Banner sixth ePassport Image"
        />
      </div>
      <h1 className={styles.Title}>
        Mint Your Virtual <br /> ePassport{" "}
      </h1>
      <div className={styles.BtnContainer}>
        <button type="button" className={styles.JoinNow}>
          Join Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
