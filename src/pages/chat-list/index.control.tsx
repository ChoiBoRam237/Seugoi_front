import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

/**
 * @brief 채팅 목록 컨트롤
 */

export const useControlChatList = () => {
    const [searching, setSearching] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>(""); // 검색어
    const debouncedKeyword = useDebounce(keyword, 800);

    return {
        searching, setSearching,
        keyword, setKeyword, debouncedKeyword,
    }
}