import React from "react";
import styled from "styled-components";
import { BLUE } from "../cssConfig";
import { HomePage } from "../page/HomePage";

export const MainLayout = () => {
  return (
    <Style>
      <HomePage></HomePage>
    </Style>
  );
};

const Style = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${BLUE};
`;
