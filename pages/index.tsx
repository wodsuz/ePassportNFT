import { useTheme } from "next-themes";
import styles from "../styles/Home.module.scss";
import React, { useEffect, useState } from "react";

import { Header, SunIcon, MoonIcon, Layout } from "../components";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pageDescription =
    "Explore our comprehensive Frequently Asked Questions (FAQ) page to find answers to common queries about Automated-bots. From troubleshooting tips to in-depth explanations, our FAQ section is designed to provide clarity and assistance. Save time and get the information you need quickly. If you have specific questions not covered here, feel free to reach out to our dedicated support team. Discover a wealth of knowledge at your fingertips with our user-friendly FAQ resource.";

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Layout
        title="ePassport NFT | Collect,Travel,Earn! "
        content={pageDescription}
      >
        <main>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <button
            type="button"
            aria-label="Toggle Theme"
            className="toggle-button"
            onClick={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
          >
            {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
          </button>
        </main>
      </Layout>
    </div>
  );
}
