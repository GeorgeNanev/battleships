import React, { useState, useEffect } from "react";
//UTILS
import { createPlayer, createEnemyPlayer } from "../../utils";
//COMPONENTS
import { Board, EnemyBoard, PlayerBoard, HeaderSection } from "../";
//UI
import * as MainPageUI from "./MainPageUI";

let player = createPlayer();
let computerPlayer = createEnemyPlayer();

export default () => {
  const [gameboard, setGameboard] = useState([]);
  const [attackboard, setAttackboard] = useState([]);
  const [ships, setShips] = useState([]);
  const [isStarted, setStarted] = useState(false);
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
      }))
    );
    setWhoseTurn("Your turn");
    setStarted(false);
    setWinner("");
  };
  // initialize on mount
  useEffect(() => init(), []);

  // check if computer has won and end the game or continue with the attack
  const computerTurn = () => {
    setTimeout(() => {
      const attackResult = computerPlayer.attack(player);
      setGameboard([...player.getGameboard()]);
      if (player.hasLost()) {
        setWinner("Computer has won! Try again.");
        return;
      }
      if (attackResult) {
        computerTurn();
        return;
      }
      setWhoseTurn("Your turn");
    }, 500);
  };
  // check if the player has won the game or continue with the attack
  const playerTurn = (row, col) => {
    const attackResult = player.attack(computerPlayer, row, col);
    setAttackboard(computerPlayer.getAttackboard());
    if (computerPlayer.hasLost()) {
      setWinner("You have won the game! Good job.");
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
    if (!isStarted) {
      player.randomizeShips();
      setShips(
        player.getShips().map((ship) => ({
          ...ship,
        }))
      );
    }
  };

  const handleCellClick = (row, col) => {
    //   check if game is isStarted and if there is winner
    if (isStarted && !winner && whoseTurn === "Your turn") {
      playerTurn(row, col);
    }
  };
  // restart game
  const handleNewGame = () => {
    init();
  };

  return (
    <MainPageUI.StyledGame>
      <MainPageUI.StyledHeader>
        <h1>Battleships game</h1>
      </MainPageUI.StyledHeader>
      <HeaderSection
        winner={winner}
        isStarted={isStarted}
        onPlay={handlePlay}
        onRandom={handleRandom}
        onNewGame={handleNewGame}
        whoseTurn={whoseTurn}
      />
      <Board>
        <PlayerBoard board={gameboard} ships={ships} />
      </Board>
      <Board>
        <EnemyBoard board={attackboard} onCellClick={handleCellClick} />
      </Board>
    </MainPageUI.StyledGame>
  );
};
