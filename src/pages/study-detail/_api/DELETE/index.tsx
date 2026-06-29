import { privateBase } from "@/util/api";

/**
 * @brief 스터디 상세 관련 DELETE API
 */

export const deleteStudyDetailApi = {
    // 스터디 삭제
    deleteStudy: async (studyCode: number) =>
        await (
            await privateBase.delete(`/v3/api/study`, {
                params: { studyCode }
            })
        ).data.data,
}