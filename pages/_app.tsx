import { LogRocket } from "@/components";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mahidhar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Vaka Mahidhar Reddy"></meta>
        <meta
          name="description"
          content="Dedicated Software Developer."
        ></meta>
        <meta name="theme-color" content="#794856"></meta>
      </Head>

      <LogRocket />
      <Analytics />
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
