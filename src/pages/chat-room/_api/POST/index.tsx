import { privateBase } from "@/util/api";

/**
 * @brief 채팅방 관련 POST API
 */

export const postChatRoomApi = {
    // 채팅 이미지 파일 저장
    postChatRoomSaveImg: async (formData: FormData) =>
        await (
            await privateBase.post(`/v3/api/chat/save-img`, formData, {
                headers: {
                    "Content-Type" : "multipart/form-data", 
                }
            })
        ).data.data,
}