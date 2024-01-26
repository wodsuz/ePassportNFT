import React from "react";
import Link from "next/link";

import styles from "./DefaultButton.module.scss";
import { SunIcon, MoonIcon } from "../Icons";

const DefaultButton = ({
  resolvedTheme,
  setTheme,
}: {
  resolvedTheme: string;
  setTheme: (theme: string | ((theme: string) => string)) => Promise<void>;
}) => {
  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      className="toggle-button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DefaultButton;
