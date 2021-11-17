import React, { useEffect, useState, useContext } from "react";
import Input from "../Input";
import Table from "../Table";
import * as S from "./styles";
import { Headings } from "./config";
import { debounce } from "../../utils/debounce";
import Spinner from "../Spinner";
import ItemDetails from "../ItemDetails";
import ModalContext from "../Modal/context";

interface Item {
  name: string;
  image?: string;
  status: string;
  id: string;
}
// TODO ideally should be consumed from config or env variables.
export const BASE_PATH = "http://localhost:8083/";

const Items = () => {
    const { showModal } = useContext(ModalContext);
    const [ items, setItems ] = useState<Item[]>([]);
    const [ filteredItems, setFilteredItems ] = useState<Item[]>([]);
    const [ isError, setIsError ] = useState(false);
    const [ searchText, setSearchText ] = useState("");
    const [ showLoader, setShowLoader ] = useState(false);

    const fetchItems = async () => {
        setShowLoader(true);
        const response = await fetch(`${BASE_PATH}items`);
        const itemsData = await response.json();

        if (!itemsData.success) {
            setIsError(true);
            setShowLoader(false);
            return;
        }
        setItems(itemsData.payload);
        setFilteredItems(itemsData.payload);
        setShowLoader(false);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const onRowClick = (item) => {
        showModal({
            heading: `${item.name}`,
            body: <ItemDetails {...item} />,
            onClose: fetchItems,
        });
    };

    const filterItems = debounce((value: string) => {
        if (value) {
            const newItems = items.filter((item) => {
                return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
            });
            setFilteredItems(newItems);
        } else {
            setFilteredItems(items);
        }
    }, 100);

    const onSearch = (value: string) => {
        setSearchText(value);
        filterItems(value);
    };

    const formattedData = filteredItems.map((item) => ({
        ...item,
        image: (
            <S.ImageWrapper>
                {item.image ? <img src={item.image} alt={item.name} /> : "No Image"}
            </S.ImageWrapper>
        ),
        status: <S.Bullet status={item.status}>{item.status}</S.Bullet>,
    }));

    return (
        <S.Wrapper>
            <>
                <Input
                    showIcon
                    placeholder="search"
                    onChange={onSearch}
                    value={searchText}
                />
                {showLoader && <Spinner />}

                {isError && !formattedData.length && (
                    <S.Error>Failed to fetch items</S.Error>
                )}

                {!formattedData.length && !isError ? (
                    <div>No data to display</div>
                ) : (
                    <Table
                        headings={Headings}
                        items={formattedData}
                        onRowClick={onRowClick}
                    />
                )}
            </>
        </S.Wrapper>
    );
};

export default Items;
