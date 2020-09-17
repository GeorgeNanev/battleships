import React from "react";
//UI
import * as HeaderSectionUI from "./HeaderSectionUI";
export default ({
  onRandom,
  onPlay,
  onNewGame,
  isStarted,
  winner,
  whoseTurn,
}) => {
  return (
    <div>
      {!isStarted && !winner && (
        <HeaderSectionUI.StyledMessage>
          Start the game against the computer
        </HeaderSectionUI.StyledMessage>
      )}
      {isStarted && (
        <HeaderSectionUI.StyledButton onClick={onNewGame}>
          New Game
        </HeaderSectionUI.StyledButton>
      )}
      {!winner && !isStarted && (
        <HeaderSectionUI.StyledButton onClick={onPlay}>
          Start game
        </HeaderSectionUI.StyledButton>
      )}
      {isStarted && !winner && (
        <HeaderSectionUI.StyledMessage>
          {whoseTurn}
        </HeaderSectionUI.StyledMessage>
      )}
      {isStarted && winner && (
        <HeaderSectionUI.StyledMessage>{`${winner}. Try again ?`}</HeaderSectionUI.StyledMessage>
      )}
      <HeaderSectionUI.StyledButton onClick={onRandom} disabled={isStarted}>
        Shuffle position
      </HeaderSectionUI.StyledButton>
    </div>
  );
};
