import React from "react";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
  const state = useGlobalState();
  return (
    <CardWrapper bgUrl={data.image}>
      <Content>
        <Plus />
        <Location>{data.displayName}</Location>
        <Count dir={state.dir}>{data.count}</Count>
      </Content>
    </CardWrapper>
  );
};
export default CityCard;
