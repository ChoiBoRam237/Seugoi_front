import type { AxiosRequestConfig } from "axios";
import { publicBase } from "../api";

/**
 * @brief 공통 API
 */

export const commonApi = {
    getRefreshApi: async (config?: AxiosRequestConfig<any>) =>
        await (
            await publicBase.get(`/v3/kakao/refresh`, config)
        ).data.data,
}