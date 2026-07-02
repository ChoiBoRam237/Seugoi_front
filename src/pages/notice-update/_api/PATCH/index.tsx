import { privateBase } from "@/util/api";

/**
 * @brief 공지 수정 관련 PATCH API
 */

export const patchNoticeUpdateApi = {
    // 공지 수정
    patchNoticeUpdate: async (noticeCode: number, title: string, content: string) =>
        await (
            await privateBase.patch(`/v3/api/notice/update`, { title, content }, {
                params: { noticeCode }
            })
        ).data.data,
}