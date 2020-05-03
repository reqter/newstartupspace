import React from "react";
import { AppProps } from "next/app";
import "./../styles/index.css";
import { appWithTranslation } from "../../config/Next18Wrapper";
import MainLayout from "../components/MainLayout";

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default appWithTranslation(AppComponent);
