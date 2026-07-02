import { privateBase } from "@/util/api";

/**
 * @brief 과제 수정 관련 PATCH API
 */

export const patchAsgmtUpdateApi = {
    patchAsgmtUpdate: async (asgmtCode: number, formData: FormData) =>
        await (
            await privateBase.patch(`/v3/api/asgmt/update`, formData, {
                params: { asgmtCode },
                headers : {
                    "Content-Type" : "multipart/form-data",
                },
            })
        ).data.data,
}