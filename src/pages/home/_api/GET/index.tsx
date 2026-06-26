import { privateBase } from "@/util/api";

/**
 * @brief 메인화면 관련 GET API
 */

export const getHomeApi = {
    // 최근 조회한 스터디
    getStudyView: async () =>
        await (
            await privateBase.get(`/v3/api/study/view`)
        ).data.data,

    // 스터디 검색
    getStudySearch: async (keyword: string) =>
        await (
            await privateBase.get(`/v3/api/study/search`, {
                params: { keyword }
            })
        ).data.data,
}