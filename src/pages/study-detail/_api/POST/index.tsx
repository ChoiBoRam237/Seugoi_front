import { privateBase } from "@/util/api";

/**
 * @brief 스터디 상세 관련 POST API
 */

export const postStudyDetailApi = {
    // 스터디 가입
    postStudyJoin: async (userCode: number, studyCode: number) =>
        await (
            await privateBase.post(`/v3/study/join`, {
                userCode,
                studyCode
            })
        ).data.data,
}