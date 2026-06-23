import { privateBase } from "@/util/api";

/**
 * @brief 스터디 목록 관련 GET API
 */

export const getStudyListApi = {
    getStudyList: async (filterValue: string, sortValue: string) =>
        await (
            await privateBase.get(`/v3/api/study`, {
                params: {
                    filterValue,
                    sortValue
                }
            })
        ).data.data,
}