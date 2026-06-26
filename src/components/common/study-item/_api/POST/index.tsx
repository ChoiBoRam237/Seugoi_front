import { privateBase } from "@/util/api";

/**
 * @brief 스터디 아이템 관련 POST API
 */

export const postStudyItemApi = {
    // 스터디 북마크 토글 api
    postBookmark: async (studyCode: number) =>
        await (
            await privateBase.post(`/v3/api/bookmark`, null, {
                params: {
                    studyCode
                }
            })
        ).data.data,
}