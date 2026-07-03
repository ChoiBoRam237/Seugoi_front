import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 GET API
 */

export const getAsgmtApi = {
    // 과제 댓글 조회
    getAsgmtComment: async (asgmtCode: number) =>
        await (
            await privateBase.get(`/v3/api/asgmt-cmt`, {
                params : { asgmtCode },
            })
        ).data.data,
}