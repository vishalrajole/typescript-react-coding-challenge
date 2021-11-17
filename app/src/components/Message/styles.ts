import styled from "styled-components";

interface MessageProps {
  type?: string;
}

export const Message = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props: MessageProps) => (props.type === "error" ? "red" : "#000")};
  margin: 20px;
  padding: 20px;
`;
