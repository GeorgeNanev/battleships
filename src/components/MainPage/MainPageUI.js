import styled from "styled-components";
export const StyledGame = styled.div`
  display: inline-grid;
  grid-gap: 120px;
  grid-column-gap: 10px;
  grid-template-rows: 100px 300px auto;
  grid-template-columns: 1fr 2fr 2fr;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  grid-column: 1 / 4;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: "Avenir", sans-serif;
  color: #5d5c5c;
`;

export const StyledBoardWrapper = styled.div`
  display: flex;
  grid-column: 1 / 4;
  justify-content: space-around;
  align-items: center;
`;

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
  &:disabled {
    color: white;
    background: #cccccc;
    text-shadow: 0px 1px 0px #cccccc;
    box-shadow: inset 0px -3px 7px 0px #cccccc;
  }
`;

export const StyledButtonsWrapper = styled.div`
  grid-column: 1/ 4;
  justify-content: space-around;
  align-items: center;
`;

export const StyledMessage = styled.h3`
  margin-top: 10px;
  text-align: center;
`;
export const InfoWrapper = styled.div`
  display: grid;
`;
