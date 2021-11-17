import React, { useState, useContext } from "react";
import Button from "../Button";
import Select from "../Select";
import ModalContext from "../Modal/context";
import { BASE_PATH } from "../Items";
import * as S from "./styles";
import { Message } from "../Message/styles";

interface ItemDetailsProps {
  id: string;
  statusValue: string;
}

const STATUS_OPTIONS = [
    {
        label: "Done",
        value: "done",
    },
    {
        label: "New",
        value: "new",
    },
    {
        label: "Error",
        value: "error",
    },
    {
        label: "Processing",
        value: "processing",
    },
];
const ItemDetails = ({ id, statusValue }: ItemDetailsProps) => {
    const { hideModal } = useContext(ModalContext);

    const [ isError, setIsError ] = useState(false);
    const [ updatedStatus, setUpdatedStatus ] = useState(statusValue);

    const onChange = (value: string) => {
        setUpdatedStatus(value);
    };

    const saveItem = async () => {
        const response = await fetch(`${BASE_PATH}items/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: updatedStatus }),
        });
        const items = await response.json();

        if (!items.success) {
            setIsError(true);
            return;
        }
        hideModal("saved");
    };

    const closeModal = () => {
        hideModal();
    };

    return (
        <>
            {isError && <Message type="error">Error in saving status </Message>}

            <Select
                label="Status"
                options={STATUS_OPTIONS}
                value={updatedStatus}
                placeholder="update status"
                onChange={onChange}
            />
            <S.ActionsWrapper>
                <Button variant="secondary" onClick={closeModal} label="Close" />
                <Button variant="primary" onClick={saveItem} label="Save" />
            </S.ActionsWrapper>
        </>
    );
};

export default ItemDetails;
