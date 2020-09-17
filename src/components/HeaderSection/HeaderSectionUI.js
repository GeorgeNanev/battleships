import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: center;
  padding: 10px 20px;
  margin-top: 4px;
  border: none;
  border-radius: 5px;
  background-color: lightgreen;
  outline: none;
  cursor: pointer;
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  grid-column: 1 / 4;
  justify-content: space-around;
  align-items: center;
`;

export const StyledMessage = styled.h3`
  margin-top: 10px;
  text-align: center;
`;
