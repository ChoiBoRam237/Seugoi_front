import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { commonApi } from "@/util/_api";
import { IChat } from "@/components/types/chat";

/**
 * @brief 모든 채팅방 목록 조회 API hook
 */

interface Props {
    keyword: string;
    enabled?: boolean;
}

export const useChatRoomList = (props: Props) => {
    const [chatRoomList, setChatRoomList] = useState<IChat[]>([]);

    // 모든 채팅방 목록 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["chatRoomList", props.keyword],
        queryFn: () => commonApi.getChatRoom(props.keyword),
        enabled: props.enabled,
    });

    useEffect(() => {
        if (data) setChatRoomList(data);
    }, [data]);

    return {
        chatRoomLoading: isLoading || isFetching,
        chatRoomList,
    }
}