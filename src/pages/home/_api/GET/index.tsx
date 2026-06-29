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

    // 요즘 뜨고있는 스터디 조회
    getStudyTrend: async () =>
        await (
            await privateBase.get(`/v3/api/study/trend`)
        ).data.data,

    // 오늘의 명언 조회
    getTodayQuote: async () =>
        await (
            await privateBase.get(`/v3/api/quote-today`)
        ).data.data,
}