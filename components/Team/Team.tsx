import React from "react";
import styles from "./Team.module.scss";

import { Confetti } from "../Confetti";

const MemberComponent = ({
  img,
  name = " ",
  position = "",
}: {
  img: string;
  name: string;
  position: string;
}) => {
  return (
    <div className={styles.Item}>
      <div className={styles.ImageContainer}>
        <img src={img} alt={name} />
      </div>
      <h2 className={styles.Name}>{name}</h2>
      <h2 className={styles.Position}>{position}</h2>
    </div>
  );
};

const Team = () => {
  return (
    <section className={styles.Section} id="team">
      <Confetti />
      <h1 className={styles.Title}>Team</h1>
      <div className={styles.Container}>
        <MemberComponent
          img="/assets/Nfts/bighead-5.svg"
          name="Ongun"
          position="Founder | Web3 Developer"
        />
        <MemberComponent
          img="/assets/Nfts/bighead-7.svg"
          name="Erdal"
          position="Co-Founder"
        />
        <MemberComponent
          img="/assets/Nfts/bighead-8.svg"
          name="Özgenç"
          position="Co-Founder"
        />
        <MemberComponent
          img="/assets/Nfts/bighead.svg"
          name="Sinem"
          position="Manager"
        />
        <MemberComponent
          img="/assets/Nfts/bighead-9.svg"
          name="Özge"
          position="social media manager"
        />
        <MemberComponent
          img="/assets/Nfts/bighead-3.svg"
          name="Meltem"
          position="Designer"
        />
      </div>
    </section>
  );
};

export default Team;
