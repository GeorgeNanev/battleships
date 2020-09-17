import styled from "styled-components";

export const StyledShip = styled.div.attrs(
  ({ row, col, length, orientation }) => ({
    style: {
      top: row * 32,
      left: col * 32,
      width: orientation ? 31 * length + 1 : "29px",
      height: !orientation ? 31 * length + 1 : "29px",
    },
  })
)`
  position: absolute;
  border: 2px solid #00f;
  border-radius: 2px;
  background-color: rgba(0, 0, 255, 0.05);
`;
