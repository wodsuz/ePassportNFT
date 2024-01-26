import React from "react";
import Link from "next/link";

import styles from "./DefaultButton.module.scss";

const DefaultButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <div className={styles.button}>
      <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}{" "}
      </Link>
    </div>
  );
};

export default DefaultButton;
