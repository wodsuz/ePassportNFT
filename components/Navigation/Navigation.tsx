import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import styles from "./Navigation.module.scss";

import { Logo } from "../Logo";
import { DefaultButton, ThemeButton } from "../Buttons";
import { Opensea, Twitter, Discord, LinkedIn } from "../Icons";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };

  const hamburgerMenu = () => {
    const navMenu = document.querySelector("#navMenu");
    if (navMenu?.attributes[1].value === styles.hamburgerMenuAfter) {
      document
        .querySelector("#navMenu")!
        .setAttribute("class", styles.hamburgerMenu);
    } else {
      document
        .querySelector("#navMenu")!
        .setAttribute("class", styles.hamburgerMenuAfter);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <section className={styles.section} id="navigation">
      <section className={styles.navbar}>
        <Logo />
        <span
          id="navMenu"
          className={styles.hamburgerMenu}
          onClick={() => hamburgerMenu()}
        >
          &nbsp;
        </span>
        <ul className={styles.menu}>
          <li
            className={styles.menuItem}
            onClick={() => scrollTo("navigation")}
          >
            Home
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("about")}>
            About
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("roadmap")}>
            Roadmap
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("showcase")}>
            Showcase
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("team")}>
            Team
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("faq")}>
            Faq
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("contact")}>
            Contact
          </li>
          <li className={styles.menuItem} onClick={() => scrollTo("contact")}>
            Whitepaper
          </li>
          <li>
            <ThemeButton resolvedTheme={resolvedTheme} setTheme={setTheme} />
          </li>
          <li className={styles.iconList}>
            <Link
              href="https://opensea.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Opensea />
            </Link>
            <Link
              href="http://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
            <Link
              href="http://www.discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
            </Link>
          </li>
          <li className={styles.mobile}>
            <DefaultButton text="Connect Wallet" link="https://google.com" />
          </li>
        </ul>

        <div className={styles.desktop}>
          <DefaultButton text="Connect Wallet" link="https://google.com" />
        </div>
      </section>
    </section>
  );
};

export default Navigation;
