import { publicBase } from "@/util/api";

/**
 * @brief 로그인 관련 GET API
 */

export const loginGetApi = {
    // 카카오 로그인 정보 조회
    getKakaoCallback: async (code: string) =>
        await (
            await publicBase.get(`/v3/api/kakao/callback`, {
                params: { code }
            })
        ).data.data,
};