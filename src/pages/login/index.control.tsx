import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenInfo } from "@/hooks/useTokenInfo";
import { KAKAO_AUTH_URL, KAKAO_CLIENT_ID, KAKAO_REDIRECT_URL } from "@/util/api";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 로그인 컨트롤
 */

export const useControlLogin = () => {
    const navigate = useNavigate();
    const { accessToken } = useTokenInfo();

    const onLogin = () => {
        window.location.href = 
            `${KAKAO_AUTH_URL}?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}`;
    };

    useEffect(() => {
        if (accessToken) navigate(`/${LinkEnum.HOME}`);
    }, []);

    return {
        onLogin,
    }
}