import React from "react";
import Link from "next/link";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoText}>
      <Link href="/">ePassport</Link>
    </div>
  );
};

export default Logo;
