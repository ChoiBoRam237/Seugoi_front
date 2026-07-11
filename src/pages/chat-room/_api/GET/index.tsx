import { privateBase } from "@/util/api";

/**
 * @brief 채팅방 관련 GET API
 */

export const getChatRoomApi = {
    // 특정 채팅방 조회
    getChatRoom: async (chatRoomCode: number) =>
        await (
            await privateBase.get(`/v3/api/chat/room/${chatRoomCode}`)
        ).data.data,

    // 이전 채팅 내용 조회
    getChatMessages: async (chatRoomCode: number) =>
        await (
            await privateBase.get(`/v3/api/chat/messages/${chatRoomCode}`)
        ).data.data,
}