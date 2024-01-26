import React from "react";
import Image from "next/image";
import { TypeWriterText } from "../TypeWriterText";
import styles from "./Home.module.scss";

import { CoverVideo } from "../CoverVideo";

const Home = () => {
  return (
    <div className={styles.section} id="home">
      <div className={styles.container}>
        <div className={styles.box}>
          <TypeWriterText />
        </div>
        <div className={styles.box}>
          <CoverVideo />
        </div>
        <div className={styles.round}>
          <div className={styles.circle}>&#x2193;</div>
          <Image
            src="/assets/Rounded-Text-Black.png"
            alt="NFT"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
