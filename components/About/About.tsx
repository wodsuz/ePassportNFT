import React from "react";
import styles from "./About.module.scss";

import { Carousel } from "../Carousel";
import { DefaultButton } from "../Buttons";

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.box}>
          <Carousel />
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>
            Welcome To <br /> ePassport
          </h2>
          <p className={styles.subText}>
            {" "}
            Your digital passport to the world of unique, mintable NFTs. Our
            platform allows you to create and own your digital identity in the
            form of NFT passports, stored as ERC-721 tokens on the Ethereum
            blockchain and hosted on IPFS. With ePassport, you're not just
            minting NFTs, you're crafting your unique digital identity. Step
            into the future of digital ownership with ePassport.
          </p>
          <p className={styles.subTextLight}>
            Mint your unique NFT passport, own it, trade it, and explore the
            endless possibilities in the world of digital ownership. Your
            journey into the future of blockchain technology starts here with
            ePassport.
          </p>
          <div className={styles.buttonContainer}>
            <DefaultButton text="JOIN OUR DISCORD" link="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
