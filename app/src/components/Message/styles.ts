import styled from "styled-components";

export const Message = styled.div<{ type?: string }>`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.type === "error"
        ? props.theme.palette.error.main
        : props.theme.palette.text.secondary)};
  margin: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg};
`;
