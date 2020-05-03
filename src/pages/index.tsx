import React from "react";
import Head from "next/head";
import { withTranslation } from "../../config/Next18Wrapper";
import First from "../components/First";
import Service from "../components/Service";

const Index = ({ t }) => {
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <First />
      <Service />
    </>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["home"],
});
export default withTranslation("home")(Index);
//
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
