import styled from "styled-components";
export const StyledGame = styled.div`
  display: inline-grid;
  grid-template-rows: 100px 100px auto;
  grid-template-columns: 1fr 1fr;
`;

export const StyledHeader = styled.header`
  grid-column: 1 / 4;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: "Avenir", sans-serif;
  color: #5d5c5c;
  margin-bottom: 1rem;
`;
