import { privateBase } from "@/util/api";

/**
 * @brief 마이페이지 관련 GET API
 */

export const getMypageApi = {
    // 찜한 스터디 조회
    getBookmark: async (sortValue: string) =>
        await (
            await privateBase.get(`/v3/api/bookmark`, {
                params: { sortValue }
            })
        ).data.data,
}