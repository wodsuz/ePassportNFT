import React from "react";
import Link from "next/link";

import styles from "./DefaultButton.module.scss";

const DefaultButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} aria-label={text} target="_blank" rel="noreferrer">
      <div className={styles.button}>{text} </div>
    </Link>
  );
};

export default DefaultButton;
