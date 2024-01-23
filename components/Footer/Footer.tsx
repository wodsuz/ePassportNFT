import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import { Facebook, Twitter, Instagram, LinkedIn } from "../Icons";
const Footer = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.iconList}>
            <Link
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </Link>
            <Link
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
            <Link
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </Link>
            <Link
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </Link>
          </div>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.item} onClick={() => scrollTo("navigation")}>
            Home
          </div>
          <div className={styles.item} onClick={() => scrollTo("about")}>
            About
          </div>
          <div className={styles.item} onClick={() => scrollTo("roadmap")}>
            Roadmap
          </div>
          <div className={styles.item} onClick={() => scrollTo("showcase")}>
            Showcase
          </div>
          <div className={styles.item} onClick={() => scrollTo("team")}>
            Team
          </div>
          <div className={styles.item} onClick={() => scrollTo("faq")}>
            Faq
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          &copy; {new Date().getFullYear()} ePassport. All rights reserved.This
          project or any portion thereof may not be reproduced or used in any
          manner whatsoever without the express written and agreement permission
          of the owner.
        </span>
        <span>
          <Link
            href="https://www.ongundemirag.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ongundemirag
          </Link>
        </span>
      </div>
    </div>
  );
};
/*
 * Copyright (c) {new Date().getFullYear()} ePassport. All rights reserved.
 *
 * This code or any portion thereof may not be reproduced or used in any manner whatsoever
 * without the express written permission of the owner.
 */
export default Footer;
