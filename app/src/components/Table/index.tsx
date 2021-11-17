import React, { useEffect, useState } from "react";
import { UpIcon } from "../Icons/Up";
import { DownIcon } from "../Icons/Down";
import { sortBy } from "../../utils/sort";

import * as S from "./styles";

interface Heading {
  label: string;
  key: string;
  sortable: boolean;
}

interface Item {
  label: string;
  id: string;
}

interface TableProps {
  headings: Array<Heading>;
  items: Array<any>;
  onRowClick: (item: Item) => void;
}

const Table = ({ headings, items, onRowClick }: TableProps) => {
    const [ data, setData ] = useState<Item[]>([]);
    const [ sortDirection, setSortDirection ] = useState<string>("");

    useEffect(() => {
        setData(items);
    }, [ items ]);

    const onSort = (key: string) => {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        const sorted = sortBy(data, key, sortDirection);
        setData(sorted);
    };

    return (
        <S.Table>
            <thead>
                <tr>
                    {headings.map((heading: Heading) => {
                        return (
                            <S.TableHeading
                                key={heading.label}
                                onClick={() => onSort(heading.key)}
                            >
                                {heading.label}
                                {heading.sortable && sortDirection ? (
                                    sortDirection === "asc" ? (
                                        <DownIcon />
                                    ) : (
                                        <UpIcon />
                                    )
                                ) : null}
                            </S.TableHeading>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item: Item) => {
                    return (
                        <tr key={item.id} onClick={() => onRowClick(item)}>
                            {headings.map(({ key }) => {
                                return <S.TableData key={key}>{item[key]}</S.TableData>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </S.Table>
    );
};

export default Table;
