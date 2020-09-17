import { BOARD_SIZE } from "../constants/board";

export default (coordinates) =>
  !!(
    coordinates.row >= 0 &&
    coordinates.col >= 0 &&
    coordinates.row < BOARD_SIZE &&
    coordinates.col < BOARD_SIZE
  );
