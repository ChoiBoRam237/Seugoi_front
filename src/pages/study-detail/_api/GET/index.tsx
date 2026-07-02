import { privateBase } from "@/util/api";

/**
 * @brief 스터디 상세 관련 GET API
 */

export const getStudyDetailApi = {
    // 스터디 과제/공지 목록 조회
    getStudyBoard: async (studyCode: number) =>
        await (
            await privateBase.get(`/v3/api/study/board`, {
                params: { studyCode }
            })
        ).data.data,
}