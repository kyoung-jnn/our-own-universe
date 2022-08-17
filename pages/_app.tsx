import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/global-styles";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Universe</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
