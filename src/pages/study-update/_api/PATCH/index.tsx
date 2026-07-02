import { privateBase } from "@/util/api";

/**
 * @brief 스터디 수정 관련 PATCH API
 */

export const patchStudyUpdateApi = {
    // 스터디 수정
    patchStudyUpdate: async (studyCode: number, formData: FormData) =>
        await (
            await privateBase.patch(`/v3/api/study/update`, formData, {
                params: { studyCode },
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            })
        ).data.data,
}