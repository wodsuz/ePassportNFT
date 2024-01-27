import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./Navigation.module.scss";

import { DefaultButton, ThemeButton } from "../Buttons";
import { Logo } from "../Logo";
import { SunIcon, MoonIcon } from "../Icons";

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

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.section} id="navigation">
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.hamburgerMenu} onClick={() => setClick(!click)}>
          &nbsp;
        </div>
        <div className={styles.menu}>
          <div
            className={styles.menuItem}
            onClick={() => scrollTo("navigation")}
          >
            Home
          </div>
          <div className={styles.menuItem} onClick={() => scrollTo("about")}>
            About
          </div>
          <div className={styles.menuItem} onClick={() => scrollTo("roadmap")}>
            Roadmap
          </div>
          <div className={styles.menuItem} onClick={() => scrollTo("showcase")}>
            Showcase
          </div>
          <div className={styles.menuItem} onClick={() => scrollTo("team")}>
            Team
          </div>
          <div className={styles.menuItem} onClick={() => scrollTo("faq")}>
            Faq
          </div>
          <div>
            <ThemeButton resolvedTheme={resolvedTheme} setTheme={setTheme} />
          </div>
          <div className={styles.mobile}>
            <DefaultButton text="Connect Wallet" link="https://google.com" />
          </div>
        </div>

        <div className={styles.desktop}>
          <DefaultButton text="Connect Wallet" link="https://google.com" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
