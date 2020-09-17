import React from "react";
import styled from "styled-components";
import Cell from "../Cell/Cell";
import Ship from "../Ship/Ship";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 32px);
  grid-template-rows: repeat(10, 32px);
  position: relative;
`;

export default ({ board, ships }) => {
  const renderCells = () =>
    board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Cell type={cell} key={`g${rowIndex}${colIndex}`} />
      ))
    );

  const renderShips = () =>
    ships.map((ship) => {
      const { coords } = ship;
      return (
        <Ship
          coords={coords}
          id={ship.id}
          key={ship.id}
          length={ship.length}
          orientation={ship.orientation}
        />
      );
    });

  return (
    <StyledBoard>
      {renderCells()}
      {renderShips()}
    </StyledBoard>
  );
};
