import styled from "styled-components";

export const StyledBoardContainer = styled.div`
  display: grid;
  width: 342px;
  height: 342px;
  grid-template: 32px 1fr/ 32px 1fr;
  margin-right: 20px;
`;

export const StyledNumbersCaption = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-column: 1/2;
`;

export const StyledCaptionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export const StyledLettersCaption = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 2/3;
`;
