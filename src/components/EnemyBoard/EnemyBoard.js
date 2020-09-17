import React from "react";
import styled from "styled-components";
import { Cell } from "../";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 41px);
  grid-template-rows: repeat(10, 41px);
  position: relative;
`;

export default ({ board, onCellClick, isStarted }) => {
  const renderCells = () =>
    board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Cell
          type={cell}
          key={`g${rowIndex}${colIndex}`}
          onCellClick={() => onCellClick(rowIndex, colIndex)}
          isStarted={isStarted}
        />
      ))
    );

  return <StyledBoard>{renderCells()}</StyledBoard>;
};
