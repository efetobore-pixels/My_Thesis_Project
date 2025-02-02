import "./styles.css";
import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";

export default function App() {
  return (
    <Wrapper className="App">
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
