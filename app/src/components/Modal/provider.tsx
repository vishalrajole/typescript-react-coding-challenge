import React, { useMemo, useState } from "react";
import Modal from ".";
import ModalContext, { ModalContextType } from "./context";

// TODO fix types
interface ModalProps {
  heading?: string;
  footer?: any;
  body?: any;
  onClose?: any;
}
const renderModal = ({
    heading, footer, body, onClose
}: ModalProps) => {
    if (!heading || !body) {
        return null;
    }
    return (
        <Modal heading={heading} onClose={onClose} footer={footer}>
            {body}
        </Modal>
    );
};

export default ({ children }) => {
    const [ isModalShown, toggleModal ] = useState(false);
    const [ modalProps, setModalProps ] = useState<ModalProps>({});

    const context = useMemo(
        () => ({
            isModalShown,
            showModal: (props) => {
                if (!isModalShown) {
                    setModalProps({
                        ...props,
                        onClose: () => {
                            typeof props.onClose === "function" && props.onClose();
                            toggleModal(false);
                        },
                    });
                    toggleModal(true);
                } else {
                    /* eslint-disable no-console */
                    console.warn("Modal is already shown");
                }
            },
            hideModal: () => {
                typeof modalProps.onClose === "function" && modalProps.onClose();
                toggleModal(false);
            },
        }),
        [ isModalShown, toggleModal, modalProps, setModalProps ]
    );

    return (
        <ModalContext.Provider value={context as ModalContextType}>
            {isModalShown ? renderModal(modalProps) : null}
            {children}
        </ModalContext.Provider>
    );
};
