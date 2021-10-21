import React from "react";
import styled from "styled-components";

export const Hello = () => {
  return (
    <Style>
      <div className="title">Hello react-typescript-template</div>

      <p>Lorem ipsum dolor sit.</p>
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 36px;

    padding: 2%;
    text-align: center;
  }

  p {
    text-align: center;
  }
`;
