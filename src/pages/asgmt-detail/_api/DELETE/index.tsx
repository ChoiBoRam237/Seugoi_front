import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 DELETE API
 */

export const deleteAsgmtApi = {
    // 과제 삭제
    deleteAsgmt: async (asgmtCode: number) =>
        await (
            await privateBase.delete(`/v3/api/asgmt/${asgmtCode}`)
        ).data.data,
    
    // 과제 댓글 삭제
    deleteAsgmtCmt: async (asgmtCmtCode: number) =>
        await (
            await privateBase.delete(`/v3/api/asgmt/comment/${asgmtCmtCode}`)
        ).data.data,
}