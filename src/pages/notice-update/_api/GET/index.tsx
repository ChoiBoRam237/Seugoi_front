import { privateBase } from "@/util/api";

/**
 * @brief 공지 수정 관련 GET API
 */

export const getNoticeUpdateApi = {
    // 특정 공지 조회
    getNotice: async (noticeCode: number) =>
        await (
            await privateBase.get(`/v3/api/notice`, {
                params: { noticeCode }
            })
        ).data.data,
}