import React from "react";
import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const StyledWrapper = styled.div`
    max-width: 1080px;
    min-width: 990px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  `;

  return (
    <StyledWrapper>
      <MainPage />
    </StyledWrapper>
  );
}

export default App;
