import { privateBase } from "@/util/api";

/**
 * @brief 스터디 상세 관련 DELETE API
 */

export const deleteStudyDetailApi = {
    // 스터디 삭제
    deleteStudy: async (studyCode: number) =>
        await (
            await privateBase.delete(`/v3/api/study/${studyCode}`)
        ).data.data,

    // 공지 삭제
    deleteNotice: async (noticeCode: number) =>
        await (
            await privateBase.delete(`/v3/api/notice/${noticeCode}`)
        ).data.data,

    // 스터디 탈퇴
    deleteExitStudy: async (studyCode: number) =>
        await (
            await privateBase.delete(`/v3/api/study/exit`, {
                params: { studyCode }
            })
        ).data.data,
}