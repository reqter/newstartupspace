import React, { useEffect } from "react";
import HeaderInfo from "../HeaderInfo";
import Header from "../Header";
import { Main, Content } from "./styles";

interface MainProps {}
const MainComponent: React.FC<MainProps> = ({ children }): JSX.Element => {
  useEffect(() => {}, []);
  return (
    <Main>
      <HeaderInfo />
      <Header />
      <Content>{children}</Content>
    </Main>
  );
};
export default MainComponent;
