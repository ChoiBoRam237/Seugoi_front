import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getChatListApi } from "./_api/GET";

/**
 * @brief 채팅 목록 컨트롤
 */

export const useControlChatList = () => {
    const [searching, setSearching] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>("");

    return {
        searching, setSearching,
        keyword, setKeyword,
    }
}