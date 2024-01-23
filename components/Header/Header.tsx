import React from "react";
import Head from "next/head";
import Favicon from "./Favicon";

const Header = ({ title, content }: { title: string; content: string }) => {
  const currentYear = String(new Date().getFullYear());
  const keywords =
    "NFT, Minting, Digital Art, Blockchain, Cryptocurrency, Ethereum, Smart Contracts, Collectibles, Crypto Art, NFT Marketplace, Arbitrum, ePassport, ePassport NFT";
  const url = "wwww.automated-bots.com";
  return (
    <Head>
      <title>{title}</title>
      <Favicon />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <meta name="last-updated" content={currentYear} />
      <meta name="user-signed-in" content="false" />
      <meta name="description" content={content} />
      <meta name="author" content="ePassport NFT" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://automated-bots.com/" />
      <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:sitename" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ePassport_nft" />
      <meta name="twitter:creator" content="@ePassport_nft" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={content} />
      <meta
        name="twitter:image"
        content="/favicon/android-chrome-512x512.png"
      />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:image:width" content="512" />
      <meta name="twitter:image:height" content="512" />
    </Head>
  );
};

export default Header;
