import { privateBase } from "@/util/api";

/**
 * @brief 스터디 목록 관련 GET API
 */

export const getStudyListApi = {
    getStudyList: async (userCode: number, filter: string, sort: string) =>
        await (
            await privateBase.get(`/v3/study`, {
                params: {
                    userCode,
                    filter,
                    sort
                }
            })
        ).data.data,
}