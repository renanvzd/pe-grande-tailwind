import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "rsuite/dist/rsuite.css";
import "@/styles/globals.css";

export default function App(props: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  const { Component, pageProps } = props;

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
