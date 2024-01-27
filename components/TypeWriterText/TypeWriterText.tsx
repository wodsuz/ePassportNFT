import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./TypeWriterText.module.scss";

import { DefaultButton } from "../Buttons";

import { Akaya_Telivigala, Outfit, Sora } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const akaya = Akaya_Telivigala({ subsets: ["latin"], weight: ["400"] });
const sora = Sora({ subsets: ["latin"], weight: ["400"] });

const TypeWriterText = () => {
  return (
    <div className={sora.className}>
      <div className={styles.Title}>
        Discover a new era of cool
        <div className={akaya.className}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`<span style="color:blue">NFTs.</span>`)
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span style="color:orange">Collectible Items.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span style="color:red">Ape Killers!</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <div className={styles.SubTitle}>Bored Of Apes? Try Something New.</div>
      <div className={styles.ButtonContainer}>
        <DefaultButton text="Explore" link="#about" />
      </div>
    </div>
  );
};

export default TypeWriterText;
