import styled from "styled-components";

export const StyledButton = styled.button`
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color: #2dabf9;
  border-radius: 18px;
  border: 1px solid #ccddf3;
  display: inline-block;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  padding: 16px 44px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
  &:hover {
    background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
    background-color: #0688fa;
  }
  &:active {
    position: relative;
    top: 1px;
  }
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
