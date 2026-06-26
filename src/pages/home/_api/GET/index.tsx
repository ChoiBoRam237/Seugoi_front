import { privateBase } from "@/util/api";

/**
 * @brief 메인화면 관련 GET API
 */

export const getHomeApi = {
    // 최근 검색어 조회
    getSearchKeyword: async () =>
        await (
            await privateBase.get(`/v3/api/search-keyword`)
        ).data.data,

    // 스터디 검색
    getStudySearch: async (keyword: string) =>
        await (
            await privateBase.get(`/v3/api/study/search`, {
                params: { keyword }
            })
        ).data.data,
}