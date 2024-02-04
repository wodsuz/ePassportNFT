import "../styles/global.scss";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { Akaya_Telivigala, Outfit, Sora } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const akaya = Akaya_Telivigala({ subsets: ["latin"], weight: ["400"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
