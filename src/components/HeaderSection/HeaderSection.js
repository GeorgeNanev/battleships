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
    <HeaderSectionUI.StyledButtonsWrapper>
      {isStarted && (
        <HeaderSectionUI.StyledButton onClick={onNewGame}>
          New Game
        </HeaderSectionUI.StyledButton>
      )}
      {!winner && !isStarted && (
        <HeaderSectionUI.StyledButton onClick={onPlay}>
          Play
        </HeaderSectionUI.StyledButton>
      )}
      {!isStarted && !winner && (
        <HeaderSectionUI.StyledMessage>
          Place ships
        </HeaderSectionUI.StyledMessage>
      )}
      {isStarted && !winner && (
        <HeaderSectionUI.StyledMessage>
          {whoseTurn}
        </HeaderSectionUI.StyledMessage>
      )}
      {isStarted && winner && (
        <HeaderSectionUI.StyledMessage>{`${winner} won the game`}</HeaderSectionUI.StyledMessage>
      )}
      <HeaderSectionUI.StyledButton onClick={onRandom} disabled={isStarted}>
        Random
      </HeaderSectionUI.StyledButton>
    </HeaderSectionUI.StyledButtonsWrapper>
  );
};
