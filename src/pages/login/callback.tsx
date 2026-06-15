import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { loginApi } from "./_api";
import type { AxiosError } from "axios";
import { useEffect } from "react";
import { cookie } from "@/util/cookies";
import { LinkEnum } from "@/meta/link";

export const Callback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const getCallback = useMutation({
        mutationFn: async () => {
            const params = searchParams.get("code");
            return await loginApi.getKakaoCallback(params);
        },
        onSuccess: (data) => {
            // 브라우저 쿠키에 유저 정보 저장
            cookie.setCookie("user", JSON.stringify({
                userId: data.userId,
                name: data.nickname,
                email: data.email,
                profileImageUrl: data.profileImageUrl
            }));

            // 브라우저 쿠키에 accessToken 저장
            cookie.setCookie("accessToken", data.accessToken);

            // 저장 후 메인화면으로 이동동
            navigate(`/${LinkEnum.HOME}`);
        },
        onError: (error: AxiosError) => {
            console.error("로그인 정보 조회 에러 :", error);
        }
    });

    useEffect(() => {
        getCallback.mutate();
    }, []);

    return (
        <CallbackContainer>
            <Spin indicator={<LoadingOutlined spin style={{ fontSize: 40 }} />} />
            로그인 중...
        </CallbackContainer>
    )
}

const CallbackContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    color: white;
`;