import { privateBase } from "@/util/api";

/**
 * @brief 스터디 관련 공통 API
 */

export const commonStudyApi = {
    // 최근 조회한 스터디 조회
    getStudyView: async () =>
        await (
            await privateBase.get(`/v3/api/study/view`)
        ).data.data,
}