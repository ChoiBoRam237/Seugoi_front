import { publicBase } from "@/util/api";

/**
 * @brief 로그인 관련 API
 */

export const loginApi = {
    // 카카오 로그인 정보 조회
    getKakaoCallback: async (code: string) =>
        await (
            await publicBase.get(`/v3/kakao/callback`, {
                params: {
                    code
                }
            })
        ).data,
};