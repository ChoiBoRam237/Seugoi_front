import { privateBase } from "@/util/api";

/**
 * @brief 과제/공지 생성 관련 POST API
 */

export const postGenerateBoardApi = {
    // 과제 생성
    postGenerateAsgmt: async (studyCode: number, formData: FormData) =>
        await (
            await privateBase.post(`/v3/api/asgmt/generate`, formData, {
                params: { studyCode },
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
        ).data.data,

    postGenerateNotice: async (studyCode: number, title: string, content: string) =>
        await (
            await privateBase.post(`/v3/api/study/notice/generate`, { title, content }, {
                params: { studyCode }
            })
        ).data.data,
}