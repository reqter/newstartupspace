import React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { withTranslation } from "../../config/Next18Wrapper";
import useSWR from "swr";
import { getContent } from "../services/apiHandler";
import MainLayout from "../components/MainLayout";
import First from "../components/First";
import Service from "../components/Service";
import Spaces from "../components/Spaces";
import Cities from "../components/Cities";
import NewsLetter from "../components/NewsLetter";
import Blogs from "../components/Blogs";

interface IProps {
  t: (key: string) => string;
  direction: string;
  getInitialProps?: (ctx: NextPageContext) => Promise<any>;
}

const Home = ({}): JSX.Element => {
  // const { t, i18n } = useTranslation();
  // const { data, error } = useSWR("/api/data", getContent, { initialData });
  return (
    <MainLayout>
      <Head>
        <title>Startup-Space</title>
      </Head>
      <First />
      <Service />
      <Spaces />
      <Cities />
      <NewsLetter />
      <Blogs />
    </MainLayout>
  );
};

Home.getInitialProps = async (context) => {
  return {};
};
export default Home;

/* // const initialData = await getContent("/api/data");
// header
// landing { searchBackground, searchImage , serviceTitle,serviceHeader,serviceDescription,serviceButtonText , srviceImage };
// ...get other collections data
// footer */

// const Index = ({ t, initialData }) => {
//   // useSwr to cache data
//   // const { data, error}  = useSwr("....." ,  initialData )
//   ////// call some api's like get initial data
//   return (
//     <>
//       <Head>
//         <title>{t("title")}</title>
//       </Head>
//       // <First data={data.searchBoxData} />
//       <First />
//       <Service />
//     </>
//   );
// };
//
// Index.getInitialProps = async () => ({
//   namespacesRequired: ["home"],
//   // header
//   // landing { searchBackground, searchImage , serviceTitle,serviceHeader,serviceDescription,serviceButtonText , srviceImage }
//   // ... get other collections data
//   // footer
// });
//
// export default withTranslation("home")(Index);
