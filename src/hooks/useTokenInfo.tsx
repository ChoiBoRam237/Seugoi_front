import { cookie } from "@/util/cookies";

/**
 * @brief 토큰 정보 hook
 * @returns
 * accessToken: 액세스 토큰
 * refreshToken: 리프레시 토큰
 */

export const useTokenInfo = () => {
    const tokenInfo = cookie.getCookie("token");
    const accessToken = tokenInfo.accessToken ?? "";
    const refreshToken = tokenInfo.refreshToken ?? "";

    return {
        accessToken,
        refreshToken,
    }
}