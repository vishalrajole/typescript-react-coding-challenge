import React, {
    useContext, useEffect, ReactChildren, useRef
} from "react";
import useClickOutside from "src/utils/useClickOutside";
import useEscapePressed from "src/utils/useEscapePressed";
import ModalContext from "./context";
import {
    Overlay, ModalWrapper, ModalHeader, ModalContent
} from "./styles";

const modalRoot = document.getElementById("modal-root");

export interface ModalProps {
  heading: string | ReactChildren;
  children: ReactChildren;
  onClose?: (reason: string) => void;
}

const Modal = ({ heading, children }: ModalProps) => {
    const modalRef = useRef(null);
    const { hideModal } = useContext(ModalContext);
    const ele = document.createElement("div");

    useClickOutside({ ref: modalRef, handler: () => hideModal() });
    useEscapePressed({ handler: () => hideModal() });

    useEffect(() => {
        modalRoot?.appendChild(ele);
        return function cleanup() {
            modalRoot?.removeChild(ele);
        };
    }, []);

    return (
        <Overlay>
            <ModalWrapper ref={modalRef}>
                {heading && <ModalHeader>{heading}</ModalHeader>}
                <ModalContent>{children}</ModalContent>
            </ModalWrapper>
        </Overlay>
    );
};

export default Modal;
