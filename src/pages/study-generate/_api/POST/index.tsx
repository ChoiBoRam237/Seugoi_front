import { privateBase } from "@/util/api";

/**
 * @brief 스터디 생성 관련 POST API
 */

export const postStudyGenerateApi = {
    // 스터디 생성
    postStudyGenerate: async (data: FormData) =>
        await (
            await privateBase.post(`/v3/study/generate`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        ).data.data,
}