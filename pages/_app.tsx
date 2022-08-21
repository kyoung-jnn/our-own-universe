import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Universe</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
