import { privateBase } from "@/util/api";

/**
 * @brief 스터디 생성 관련 POST API
 */

export const postStudyGenerateApi = {
    // 스터디 생성
    postStudyGenerate: async (formData: FormData) =>
        await (
            await privateBase.post(`/v3/api/study/generate`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
        ).data.data,
}