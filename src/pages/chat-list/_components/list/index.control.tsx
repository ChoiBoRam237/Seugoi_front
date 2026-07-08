import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getChatListApi } from "../../_api/GET";
import { IChat } from "@/components/types/chat";

/**
 * @brief 채팅 목록 컨트롤
 */

export const useControlList = () => {
    const [chatList, setChatList] = useState<IChat[]>([]);

    // 채팅방 목록 조회 api
    const {
        data,
        isLoading,
        isFetching
    } = useQuery({
        queryKey: ["chatRoom"],
        queryFn: () => getChatListApi.getChatRoom()
    });

    useEffect(() => {
        if (data) setChatList(data);
    }, [data]);

    return {
        isLoading: isLoading || isFetching,
        chatList,
    }
}