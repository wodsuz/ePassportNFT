import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./TypeWriterText.module.scss";

import { DefaultButton } from "../Buttons";

const TypeWriterText = () => {
  return (
    <>
      <div className={styles.Title}>
        Discover a new era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="color:blue">NFTs.</span>')
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
      <div className={styles.SubTitle}>Bored Of Apes? Try Something New.</div>
      <div className={styles.ButtonContainer}>
        <DefaultButton text="Explore" link="#about" />
      </div>
    </>
  );
};

export default TypeWriterText;
