import React from "react";
import { BiFilterAlt } from "react-icons/bi"
import { sortData } from "./index.constants";
import { SortCreateStyle } from "./indexStyles";
import { Select } from "antd";
import { SelectType } from "@/components/types/select";

/**
 * @brief 정렬 컴포넌트
 */

interface SortProps {
    selected: SelectType;
    setSelected: React.Dispatch<React.SetStateAction<SelectType>>;
}

export const CommonSort = (props: SortProps) => {
    return (
        <>
            <Select
                value={props.selected}
                options={sortData}
                suffixIcon={<BiFilterAlt size={16} color="white" />}
                onChange={(value) => props.setSelected(value)}
            />
            <SortCreateStyle />
        </>
    )
}