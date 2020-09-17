import styled from "styled-components";

export const StyledShip = styled.div.attrs(
  ({ row, col, length, orientation }) => ({
    style: {
      top: row * 32,
      left: col * 32,
      width: orientation ? 32 * length + 1 : "33px",
      height: !orientation ? 32 * length + 1 : "33px",
    },
  })
)`
  position: absolute;
  border: 2px solid #00f;
  background-color: rgba(0, 0, 255, 0.05);
`;
