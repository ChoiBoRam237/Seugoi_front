import { privateBase } from "@/util/api";

/**
 * @brief 채팅 목록 관련 GET API
 */

export const getChatListApi = {
    // 채팅방 목록 조회
    getChatRoom: async () =>
        await (
            await privateBase.get(`/v3/api/chat/room`)
        ).data.data,
}