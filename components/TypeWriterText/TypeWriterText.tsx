import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./TypeWriterText.module.scss";

import { DefaultButton } from "../Buttons";

import { Akaya_Telivigala, Sora } from "next/font/google";
const akaya = Akaya_Telivigala({ subsets: ["latin"], weight: ["400"] });
const sora = Sora({ subsets: ["latin"], weight: ["400"] });

const TypeWriterText = () => {
  return (
    <div className={sora.className}>
      <div className={styles.Title}>
        Discover a new era of
        <div className={akaya.className}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`<span style="color:#2680aa">NFTs.</span>`)
                .pauseFor(2000)
                .deleteAll(100)
                .typeString(
                  '<span style="color:orange">Collectible Items.</span>'
                )
                .pauseFor(2000)
                .deleteAll(100)
                .typeString('<span style="color:#f21717">Ape Killers!</span>')
                .pauseFor(2000)
                .deleteAll(100)
                .start();
            }}
          />
        </div>
      </div>
      <div className={styles.SubTitle}>Get your virtual NFT passport.</div>
      <div className={styles.ButtonContainer}>
        <DefaultButton text="Explore" link="#about" />
      </div>
    </div>
  );
};

export default TypeWriterText;
