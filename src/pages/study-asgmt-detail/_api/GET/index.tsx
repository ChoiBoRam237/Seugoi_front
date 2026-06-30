import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 GET API
 */

export const getAsgmtApi = {
    // 특정 과제 상세 조회
    getAsgmtDetail: async (studyAsgmtCode: number) =>
        await (
            await privateBase.get(`/v3/api/study-asgmt/${studyAsgmtCode}`)
        ).data.data,
}