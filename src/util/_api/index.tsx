import { AxiosRequestConfig } from "axios";
import { privateBase, publicBase } from "../api";

/**
 * @brief 공통 API
 */

export const commonApi = {
    // 액세스 토큰 재발급
    getRefreshApi: async (config: AxiosRequestConfig<any>) =>
        await (
            await publicBase.get(`/v3/api/token/refresh`, config)
        ).data.data,

    // 특정 스터디 상세 조회
    getStudyDetail: async (studyCode: number) =>
        await (
            await privateBase.get(`/v3/api/study/${studyCode}`)
        ).data.data,

    // 특정 과제 상세 조회
    getAsgmtDetail: async (asgmtCode: number) =>
        await (
            await privateBase.get(`/v3/api/asgmt/${asgmtCode}`)
        ).data.data,

    // 최근 조회한 스터디 조회
    getStudyView: async () =>
        await (
            await privateBase.get(`/v3/api/study/view`)
        ).data.data,
}