import React from "react";
import * as GameInfoUI from "./GameInfoUI";
export default ({ totalShots }) => {
  return (
    <div>
      Total shots you did:{" "}
      <GameInfoUI.StyledParagraph>{totalShots}</GameInfoUI.StyledParagraph>
    </div>
  );
};
