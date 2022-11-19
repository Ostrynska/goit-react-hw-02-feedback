import React from "react";
import Feedback from "./Feedback";
import styled from 'styled-components'

export const HeadTitle = styled.h1`
  margin-right: 15px;
  margin-left: 15px;
  font-size: 64px;
  font-family: monospace;
  text-align: center;
`

export const App = () =>
{
  return (
    <>
      <HeadTitle>Cafe Expresso</HeadTitle>
      <Feedback />
    </>
  );
};
