import { createContext } from "react";

export type ModalContextType = {
  showModal: (data?: any) => void;
  isModalShown?: boolean;
  hideModal: (reason?: string) => void;
};

const ModalContext = createContext<ModalContextType>({
    showModal: () => {
    // intentional
    },
    hideModal: () => {
    // intentional
    },
    isModalShown: false,
});

export default ModalContext;
