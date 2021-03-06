import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";
import { currentTheme } from "./../../services/theming";
const { colorPrimaryLight, colorPrimaryDark } = currentTheme;

export const Wrapper = styled.header`
  background-image: url("/images/bg3.jpg");
  @apply w-full bg-fixed;
  margin-top: 0px;
  z-index: 1;
`;

export const Content = styled.div`
  @apply w-1150 flex m-auto;
`;
export const Left = styled.div`
  @apply mt-64;
`;
export const Right = styled.div`
  @apply mt-40;
`;
export const User = styled.img`
  @apply w-4/5 m-auto;
`;
