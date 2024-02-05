import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./TypeWriterText.module.scss";

import { DefaultButton } from "../Buttons";

import { Akaya_Telivigala, Sora } from "next/font/google";
const akaya = Akaya_Telivigala({ subsets: ["latin"], weight: ["400"] });
const sora = Sora({ subsets: ["latin"], weight: ["400"] });

const changeCursor = (id: string) => {
  if (id === "first") {
    document.querySelector("#mainTitle")!.classList.add(styles.firstCursor);
    document.querySelector("#mainTitle")!.classList.remove(styles.secondCursor);
    document.querySelector("#mainTitle")!.classList.remove(styles.thirdCursor);
  }
  if (id === "second") {
    document.querySelector("#mainTitle")!.classList.remove(styles.firstCursor);
    document.querySelector("#mainTitle")!.classList.add(styles.secondCursor);
    document.querySelector("#mainTitle")!.classList.remove(styles.thirdCursor);
  }
  if (id === "third") {
    document.querySelector("#mainTitle")!.classList.remove(styles.firstCursor);
    document.querySelector("#mainTitle")!.classList.remove(styles.secondCursor);
    document.querySelector("#mainTitle")!.classList.add(styles.thirdCursor);
  }
};

const TypeWriterText = () => {
  return (
    <>
      <div className={styles.Title} id="mainTitle">
        Discover your
        <div className={akaya.className}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .callFunction(() => changeCursor("first"))
                .typeString(`<span>Digital Identity.</span>`)
                .pauseFor(2000)
                .deleteAll(100)
                .callFunction(() => changeCursor("second"))
                .typeString(`<span>Blockchain Passport.</span>`)
                .pauseFor(2000)
                .deleteAll(100)
                .callFunction(() => changeCursor("third"))
                .typeString(`<span>Collectible Stamps!</span>`)
                .pauseFor(2000)
                .deleteAll(100)
                .callFunction(() => changeCursor("first"))
                .start();
            }}
          />
        </div>
      </div>
      <div className={styles.SubTitle}>Get your virtual NFT passport.</div>
      <div className={styles.ButtonContainer}>
        <DefaultButton text="Explore" link="#about" />
      </div>
    </>
  );
};

export default TypeWriterText;
