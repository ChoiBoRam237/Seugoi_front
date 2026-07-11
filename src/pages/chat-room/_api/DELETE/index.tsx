import { privateBase } from "@/util/api";

/**
 * @brief 채팅방 관련 DELETE API
 */

export const deleteChatRoomApi = {
    // 채팅방 탈퇴
    deleteChatRoom: async (chatRoomCode: number) =>
        await (
            await privateBase.delete(`/v3/api/chat/room/${chatRoomCode}`)
        ).data.data,
}