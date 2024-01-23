import Head from "next/head";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import styles from "../styles/Home.module.scss";
import { SunIcon, MoonIcon } from "../components";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ePassport NFT | Collect,Travel,Earn! </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button
          type="button"
          aria-label="Toggle Theme"
          className="toggle-button"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        <p>Current theme: {resolvedTheme}</p>

        <p className={styles.description}>Get started by editing</p>
      </main>
    </div>
  );
}
