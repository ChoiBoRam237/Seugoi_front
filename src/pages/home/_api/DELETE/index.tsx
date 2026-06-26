import { privateBase } from "@/util/api";

/**
 * @brief 메인화면 관련 DELETE API
 */

export const deleteHomeApi = {
    // 검색어 전체 삭제
    deleteAllSearchKeyword: async () =>
        await (
            await privateBase.delete(`/v3/api/search-keyword/all`)
        ).data.data,
        
    // 검색어 삭제
    deleteSearchKeyword: async (keywordCode: number) =>
        await (
            await privateBase.delete(`/v3/api/search-keyword/${keywordCode}`)
        ).data.data,
}