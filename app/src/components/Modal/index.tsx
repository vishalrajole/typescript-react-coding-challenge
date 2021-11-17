import React, { useContext, useEffect, ReactChildren } from "react";
import Button from "../Button";
import ModalContext from "./context";
import {
    Overlay,
    ModalWrapper,
    ModalHeader,
    ModalContent,
    ModalFooter,
} from "./styles";

const modalRoot = document.getElementById("modal-root");

export interface ModalProps {
  heading: string | ReactChildren;
  children: ReactChildren;
  footer: string | ReactChildren;
  onClose?: () => void;
}

const Modal = ({ heading, children, footer }: ModalProps) => {
    const { hideModal } = useContext(ModalContext);
    const ele = document.createElement("div");

    useEffect(() => {
        modalRoot?.appendChild(ele);
        return function cleanup() {
            modalRoot?.removeChild(ele);
        };
    }, []);

    return (
        <Overlay>
            <ModalWrapper>
                <ModalHeader>{heading}</ModalHeader>
                <ModalContent>{children}</ModalContent>
                <ModalFooter>
                    {footer}
                    <Button onClick={hideModal} label="Close" />
                </ModalFooter>
            </ModalWrapper>
        </Overlay>
    );
};

export default Modal;
