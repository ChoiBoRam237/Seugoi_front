import { useState } from "react";

/**
 * @brief 메인화면 컨트롤
 */

export const useControlHome = () => {
    const [searchIng, setSearchIng] = useState<boolean>(false); // 검색중인지 아닌지
    const [searchValue, setSearchValue] = useState<string>(''); // 검색어

    return {
        searchIng,
        setSearchIng,
        searchValue,
        setSearchValue
    }
}