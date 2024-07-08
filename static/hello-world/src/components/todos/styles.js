import { colors } from "@atlaskit/theme";
import styled from "styled-components";

export const Row = styled.div`
  transition: 0.3s ease all;
  padding: 8px;
  border-bottom: 1px solid ${colors.N30};

  button {
    opacity: 0;
    transition: 0.2s ease all;
    margin-left: 8px;
  }

  &:hover {
    button {
      opacity: 1;
    }
  }

  ${(props) => `
    ${props.isChecked ? "text-decoration: line-through;" : ""}
    ${props.isCompact ? "padding: 0 6px;" : ""}
    ${props.isCompact ? "border: 0;" : ""}
  `}
`;

export const Form = styled.form`
  padding: 8px 0;
`;
