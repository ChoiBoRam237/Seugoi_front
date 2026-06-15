/**
 * @brief 로그인 컨트롤
 */

import { KAKAO_AUTH_URL, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URL } from "@/util/api";

export const useControlLogin = () => {
    const onLogin = () => {
        window.location.href = 
            `${KAKAO_AUTH_URL}?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}`;
    };

    return {
        onLogin,
    }
}