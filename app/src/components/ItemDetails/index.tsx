import React, { useState, useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import ModalContext from "../Modal/context";
import { BASE_PATH } from "../Items";

interface ItemDetailsProps {
  id: string;
}
const ItemDetails = ({ id }: ItemDetailsProps) => {
    const { hideModal } = useContext(ModalContext);

    const [ isError, setIsError ] = useState(false);
    const [ updatedStatus, setUpdatedStatus ] = useState("");

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
        hideModal();
    };

    const onSave = () => {
        saveItem();
    };

    return (
        <>
            {isError && <div>Error in saving status </div>}

            <Input
                type="text"
                value={updatedStatus}
                placeholder="update status"
                onChange={onChange}
            />
            <Button onClick={onSave} label="Save" />
        </>
    );
};

export default ItemDetails;
