import React from "react";
import styles from "./CoverVideo.module.scss";
import Image from "next/image";

const CoverVideo = () => {
  return (
    <div className={styles.VideoContainer}>
      <Image
        src="/assets/hpGif.gif"
        alt="Homepage ePassport gif"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default CoverVideo;
