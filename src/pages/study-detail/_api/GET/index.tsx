import { privateBase } from "@/util/api";

/**
 * @brief 스터디 상세 관련 GET API
 */

export const getStudyDetailApi = {
    // 특정 스터디 상세 조회
    getStudyDetail: async (studyId: string) =>
        await (
            await privateBase.get(`/v3/study/${studyId}`)
        ).data.data,
}