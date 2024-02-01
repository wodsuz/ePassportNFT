import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Home.module.scss";
import { useTheme } from "next-themes";

import { CoverVideo } from "../CoverVideo";
import { TypeWriterText } from "../TypeWriterText";

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

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
          {resolvedTheme === "dark" ? (
            <Image
              src="/assets/Rounded-Text-White.png"
              alt="Homepage bottom left text white"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/assets/Rounded-Text-Black.png"
              alt="Homepage bottom left text dark"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
