import React, { useRef, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";

import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { y } = useWindowScroll();

  const scrollToTop = () => {
    let element = document.getElementById("navigation");
    element!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current!.style.display = "flex";
    } else {
      ref.current!.style.display = "none";
    }
  }, [y]);

  return (
    <div className={styles.Up} ref={ref} onClick={scrollToTop}>
      &#x2191;
    </div>
  );
};

export default ScrollToTop;
