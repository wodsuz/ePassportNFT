import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./Roadmap.module.scss";

import { DrawSvg } from "../DrawSvg";

const RoadMapItem = ({
  title,
  subText,
  addToReft,
}: {
  title: string;
  subText: string;
  addToReft: any;
}) => {
  return (
    <li className={styles.Item} ref={addToReft}>
      <div className={styles.ItemContainer}>
        <p className={styles.Box}>
          <span className={styles.SubTitle}>{title}</span>
          <span className={styles.Text}>{subText}</span>
        </p>
      </div>
    </li>
  );
};

const Roadmap = () => {
  const revealRefs = useRef(new Array());
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefts = (el: HTMLLIElement[]) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el: HTMLLIElement, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-40%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+-=200px",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <section className={styles.Section} id="roadmap">
      <h1 className={styles.Title}>Roadmap</h1>
      <div className={styles.Container}>
        <div className={styles.SvgContainer}>
          <DrawSvg />
        </div>
        <ul className={styles.Items}>
          <li className={styles.Item}>&nbsp;</li>
          <RoadMapItem
            addToReft={addToRefts}
            title="Grand Opening"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="Great Benefits"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="Early Access"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="New Merch"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="Holders Ranking"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
