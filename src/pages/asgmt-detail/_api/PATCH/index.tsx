import { privateBase } from "@/util/api";

/**
 * @brief 과제 상세 관련 PATCH API
 */

export const patchAsgmtDetail = {
    patchAsgmtCmt: async (asgmtCmtCode: number, formData: FormData) =>
        await (
            await privateBase.patch(`/v3/api/asgmt-cmt/update`, formData, {
                params: { asgmtCmtCode },
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            })
        ).data.data,
}