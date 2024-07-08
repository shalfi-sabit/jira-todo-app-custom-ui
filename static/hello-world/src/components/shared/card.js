import styled from "styled-components";
import { colors, elevation } from "@atlaskit/theme";

const Card = styled.div`
  ${elevation["e100"]};
  background: ${colors.N0};
  position: relative;
  text-decoration: none;
  border-radius: 3px;
  margin: 4px 1px;
  height: calc(100vh - 10px);
  box-sizing: border-box;
`;

export default Card;
