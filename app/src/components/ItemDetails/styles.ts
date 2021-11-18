import styled from "styled-components";
import { Button } from "../Button/styles";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing.xl};
  ${Button} {
    width: 49%;
  }
`;
