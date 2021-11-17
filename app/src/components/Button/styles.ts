import styled from "styled-components";

// TODO fix color values from theme
export const Button = styled.button<{ variant: string }>`
  height: 36px;
  background: ${(props) => (props.variant === "primary" ? "#127b02" : "#ddd")};
  color: ${(props) => (props.variant === "primary" ? "#fff" : "#000")};
  border: 1px solid
    ${(props) => (props.variant === "primary" ? "#127b02" : "#ddd")};
  font-size: 1rem;
  cursor: pointer;
  width: 120px;
  &:hover {
    background: ${(props) => (props.variant === "primary" ? "#0c5800" : "#c8c8c8")};
  }
`;
