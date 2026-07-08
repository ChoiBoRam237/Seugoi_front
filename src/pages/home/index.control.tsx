import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";

/**
 * @brief 메인화면 컨트롤
 */

export const useControlHome = () => {
    const [searching, setSearching] = useState<boolean>(false); // 검색중인지 아닌지
    const [searchValue, setSearchValue] = useState<string>(""); // 검색어
    const debouncedKeyword = useDebounce(searchValue, 800);

    return {
        searching, setSearching,
        debouncedKeyword, searchValue, setSearchValue,
    }
}