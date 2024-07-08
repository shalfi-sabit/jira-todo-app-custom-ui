import { colors } from "@atlaskit/theme";
import styled from "styled-components";

export const SummaryFooter = styled.footer`
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${colors.N10};
  border-top: 1px solid ${colors.N30};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryCount = styled.p`
  padding: 0 12px;
`;

export const SummaryActions = styled.p`
  padding: 8px;
`;
