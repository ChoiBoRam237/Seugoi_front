import { useState } from "react";
import { SelectType } from "@/components/types/select";
import { sortData } from "@/components/common/sort/index.constants";

/**
 * @brief 메인화면 컨트롤
 */

export const useControlHome = () => {
    const [searchIng, setSearchIng] = useState<boolean>(false); // 검색중인지 아닌지
    const [searchValue, setSearchValue] = useState<string>(""); // 검색어
    const [selectedSort, setSelectedSort] = useState<SelectType>(sortData[0]);

    return {
        searchIng, setSearchIng,
        searchValue, setSearchValue,
        selectedSort, setSelectedSort,
    }
}