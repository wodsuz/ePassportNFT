import React, { useState } from "react";
import styles from "./Accordion.module.scss";

import { Minus } from "../Icons";
import { Plus } from "../Icons";

const Accordion = ({ title, children }: { title: string; children: any }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className={styles.Container} onClick={() => setCollapse(!collapse)}>
      <div className={styles.Title}>
        <span>{title}</span>
        <span className={styles.Indicator}>
          {collapse ? <Minus /> : <Plus />}
        </span>
      </div>
      {collapse && <div className={styles.Reveal}>{children}</div>}
    </div>
  );
};

export default Accordion;
