import React, { useState, useEffect } from "react";
import styled from "styled-components";

import uuidv4 from "uuid/v4";
import { createPlayer, createEnemyPlayer } from "../../utils";
import Board from "../Board/Board";
import EnemyBoard from "../EnemyBoard/EnemyBoard";
import PlayerBoard from "../PlayerBoard/PlayerBoard";
import HeaderSection from "../HeaderSection/HeaderSection";

const StyledGame = styled.div`
  display: inline-grid;
  grid-template-rows: 100px 100px auto;
  grid-template-columns: 1fr 1fr;
`;

const StyledHeader = styled.header`
  grid-column: 1 / 4;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

let player = createPlayer();
let computerPlayer = createEnemyPlayer();

export default () => {
  const [gameboard, setGameboard] = useState([]);
  const [attackboard, setAttackboard] = useState([]);
  const [ships, setShips] = useState([]);
  const [started, setStarted] = useState(false);
  const [winner, setWinner] = useState("");
  const [whoseTurn, setWhoseTurn] = useState("Your turn");

  const init = () => {
    player = createPlayer();
    player.placeShips();
    computerPlayer = createEnemyPlayer();
    computerPlayer.placeShips();

    setGameboard(player.getGameboard());
    setAttackboard(computerPlayer.getAttackboard());
    setShips(
      player.getShips().map((ship) => ({
        ...ship,
        id: uuidv4(),
      }))
    );
    setWhoseTurn("Your turn");
    setStarted(false);
    setWinner("");
  };

  useEffect(() => init(), []);

  const canMoveShip = (ship, row, col) => {
    if (!started) {
      if (ship.row === row && ship.col === col) {
        return false;
      }

      return player.canMoveShip(ship, row, col);
    }
  };

  const moveShip = (ship, row, col) => {
    const movedShip = player.moveShip(ship, row, col);
    const { id } = ship;
    setShips(ships.map((s) => (s.id !== id ? s : { ...movedShip, id })));
  };

  const computerTurn = () => {
    setTimeout(() => {
      const attackResult = computerPlayer.attack(player);
      setGameboard([...player.getGameboard()]);
      if (player.hasLost()) {
        setWinner("Computer");
        return;
      }
      if (attackResult) {
        computerTurn();
        return;
      }
      setWhoseTurn("Your turn");
    }, 400);
  };

  const playerTurn = (row, col) => {
    const attackResult = player.attack(computerPlayer, row, col);
    setAttackboard(computerPlayer.getAttackboard());
    if (computerPlayer.hasLost()) {
      setWinner("You");
      return;
    }
    if (attackResult) {
      return;
    }
    setWhoseTurn("Computer turn");
    computerTurn();
  };

  const handlePlay = () => {
    setStarted(true);
  };

  const handleRandom = () => {
    if (!started) {
      player.randomizeShips();
      setShips(
        player.getShips().map((ship) => ({
          ...ship,
          id: uuidv4(),
        }))
      );
    }
  };

  const handleCellClick = (row, col) => {
    if (started && !winner && whoseTurn === "Your turn") {
      playerTurn(row, col);
    }
  };

  const handleNewGame = () => {
    init();
  };

  return (
    <StyledGame>
      <StyledHeader>
        <h1>Battleship</h1>
      </StyledHeader>
      <HeaderSection
        winner={winner}
        started={started}
        onPlay={handlePlay}
        onRandom={handleRandom}
        onNewGame={handleNewGame}
        whoseTurn={whoseTurn}
      />
      <Board>
        <PlayerBoard
          board={gameboard}
          ships={ships}
          canMoveShip={canMoveShip}
          moveShip={moveShip}
        />
      </Board>
      <Board>
        <EnemyBoard board={attackboard} onCellClick={handleCellClick} />
      </Board>
    </StyledGame>
  );
};
