import React from "react";
import styles from "./CoverVideo.module.scss";

const CoverVideo = () => {
  return (
    <div className={styles.VideoContainer}>
      <video src="/assets/HomeVideo.mp4" autoPlay muted loop />
    </div>
  );
};

export default CoverVideo;
