import React from "react";
import styles from "./About.module.scss";

import { Carousel } from "../Carousel";
import { DefaultButton } from "../Buttons";

const About = () => {
  return (
    <div className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.box}>
          <Carousel />
        </div>
        <div className={styles.box}>
          <div className={styles.title}>
            Welcome To <br /> The Weirdos Club.
          </div>
          <div className={styles.subText}>
            {" "}
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </div>
          <div className={styles.subTextLight}>
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </div>
          <div className={styles.buttonContainer}>
            <DefaultButton text="JOIN OUR DISCORD" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
