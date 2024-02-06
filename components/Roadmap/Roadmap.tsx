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
            title="The Grand Launch"
            subText="A new era of ePassport collection, sharing and travelling begins.Launching collection, discord and website"
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="ePassport Minting Stage"
            subText="User will have chance to mint their first version ePassports. Passport is required in order to collect stamps and travel around the world."
          />

          <RoadMapItem
            addToReft={addToRefts}
            title="Reward and Partnership"
            subText="Holders of ePassport will be eligible to get benefits and rewards. We will also be partnering with other projects to provide more benefits to our users."
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="Stamp Collection and Traveling"
            subText="Users will be able to collect stamps from different countries and share their experiences with others on their ePassport. "
          />
          <RoadMapItem
            addToReft={addToRefts}
            title="New round of ePassport Minting Stage"
            subText="User will have chance to mint or upgrade their ePassports that will provide different properties and rewards."
          />
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
