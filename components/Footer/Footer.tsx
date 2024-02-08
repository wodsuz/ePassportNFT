import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import { Logo } from "../Logo";
import { Banner } from "../Banner";
import { Opensea, Twitter, Discord } from "../Icons";
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
      <Banner />
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo />
          <div className={styles.iconList}>
            <Link
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Opensea />
            </Link>
            <Link
              href="https://twitter.com/ePassport_nft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
            <Link
              href="https://discord.com/invite/PzhhBBzF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
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
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} ePassport. All rights reserved. This
          project or any portion thereof may not be reproduced or used in any
          manner whatsoever without the express written and agreement permission
          of the owner.
        </span>
        <span className={styles.author}>
          <Link
            href="https://www.ongundemirag.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            &copy; ongundemirag
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
