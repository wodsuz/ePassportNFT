import React from "react";

import styles from "./DefaultButton.module.scss";
import { SunIcon, MoonIcon } from "../Icons";

const DefaultButton = ({
  resolvedTheme,
  setTheme,
}: {
  resolvedTheme: string | undefined;
  setTheme: (theme: string) => void;
}) => {
  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      className={styles.toggle}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default DefaultButton;
