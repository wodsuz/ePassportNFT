import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Vector } from "../Icons";
import styles from "./DrawSvg.module.scss";

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef<HTMLInputElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let element = ref.current;
    let svg: any = document.getElementsByClassName("svg-path")[0];
    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            ballRef.current!.style.display = "none";
          } else {
            ballRef.current!.style.display = "inline-block";
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);
  return (
    <>
      <div className={styles.Ball} ref={ballRef} />
      <div className={styles.VectorContainer} ref={ref}>
        <Vector />
      </div>
    </>
  );
};

export default DrawSvg;
