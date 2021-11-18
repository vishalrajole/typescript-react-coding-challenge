import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.palette.backdrop};
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  width: 40%;
  position: absolute;
  background: ${(props) => props.theme.palette.modalBg};
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.palette.borderColor};
`;

export const ModalContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  max-height: 80vh;
  overflow-y: auto;
`;
