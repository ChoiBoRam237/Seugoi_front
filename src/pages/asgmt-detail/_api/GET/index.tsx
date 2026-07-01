import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 GET API
 */

export const getAsgmtApi = {
    // 특정 과제 상세 조회
    getAsgmtDetail: async (asgmtCode: number) =>
        await (
            await privateBase.get(`/v3/api/asgmt/${asgmtCode}`)
        ).data.data,

    // 과제 댓글 조회
    getAsgmtComment: async (asgmtCode: number) =>
        await (
            await privateBase.get(`/v3/api/asgmt/comment`, {
                params : { asgmtCode },
            })
        ).data.data,
}