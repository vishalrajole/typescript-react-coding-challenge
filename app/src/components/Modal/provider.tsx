import React, { useState } from "react";
import Modal from ".";
import ModalContext, { ModalContextType } from "./context";

interface ModalProps {
  heading?: string;
  body?: React.ReactChildren;
  onClose?: (reason: string) => void;
}
const renderModal = ({ heading, body, onClose }: ModalProps) => {
    if (!heading || !body) {
        return null;
    }
    return (
        <Modal heading={heading} onClose={onClose}>
            {body}
        </Modal>
    );
};

export default ({ children }) => {
    const [ isModalShown, toggleModal ] = useState(false);
    const [ modalProps, setModalProps ] = useState<ModalProps>({});

    const context = {
        isModalShown,
        showModal: (props) => {
            if (!isModalShown) {
                setModalProps({
                    ...props,
                });
                toggleModal(true);
            } else {
                /* eslint-disable no-console */
                console.warn("Modal is already shown");
            }
        },
        hideModal: (reason: string) => {
            typeof modalProps.onClose === "function" && modalProps.onClose(reason);
            toggleModal(false);
        },
    };

    return (
        <ModalContext.Provider value={context as ModalContextType}>
            {isModalShown ? renderModal(modalProps) : null}
            {children}
        </ModalContext.Provider>
    );
};
