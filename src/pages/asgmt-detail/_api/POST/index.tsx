import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 POST API
 */

export const postAsgmtApi = {
    // 과제 댓글 생성
    postAsgmtComment: async (asgmtCode: number, formData: FormData) =>
        await (
            await privateBase.post(`/v3/api/asgmt-cmt`, formData, {
                params : { asgmtCode },
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            })
        ).data.data,

    // 과제 댓글 확인 처리 (관리자용)
    postAsgmtCmtSubmit: async (asgmtCmtCode: number) =>
        await (
            await privateBase.post(`/v3/api/asgmt-cmt/submit`, null, {
                params: { asgmtCmtCode } 
            })
        ).data.data,
}