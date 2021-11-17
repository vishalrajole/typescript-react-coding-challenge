import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  position: absolute;
  background: #fff;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
`;

export const ModalContent = styled.div`
  padding: 15px 20px;
  min-height: 20vh;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #ddd;
`;
