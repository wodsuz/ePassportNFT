const Favicon = (): JSX.Element => {
  return (
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicon/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        color="#020202"
        href="/favicon/safari-pinned-tab.svg"
      />
      <meta name="msapplication-TileColor" content="#ffebeb" />
      <meta name="theme-color" content="#e2e2e2" />
      <link rel="manifest" href="/favicon/manifest.webmanifest" />
    </head>
  );
};

export default Favicon;
