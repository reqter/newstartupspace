import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "./../styles/index.css";
import { appWithTranslation } from "../../config/Next18Wrapper";

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(AppComponent);
