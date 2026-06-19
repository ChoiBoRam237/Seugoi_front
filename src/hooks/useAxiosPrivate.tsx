import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { LinkEnum } from '@/meta/link';
import { privateBase } from '@/util/api';
import { commonApi } from '@/util/_api';
import { cookie } from '@/util/cookies';

/**
 * @brief 토큰 처리 hook
 */
export const AxiosComponent = () => {
    const token = cookie.getCookie("token");
    const queryClient = useQueryClient();

    // 토큰 갱신 mutation 설정
    const tokenMutation = useMutation({
        mutationFn: async () => (
            await commonApi.getRefreshApi({
                headers: {
                    Authorization: `Bearer ${token.refreshToken}`,
                },
            })
        ),
        retry: 3,
        retryDelay: 1000,
        onError: (error: AxiosError) => {
            if (error.response) {
                if (error.response.status === 401 || error.response.status === 400) {
                    cookie.clearCookie();
                    queryClient.clear();
                    window.location.href = `/${LinkEnum.LOGIN}`;
                }
            } else {
                console.error('Network or other error:', error);
            }
        },
    });

    // axios request interceptor 설정
    useEffect(() => {
        const requestIntercept = privateBase.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${token.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseIntercept = privateBase.interceptors.response.use(
            (response) => response,
                async (error) => {
                    const prevRequest = error?.response?.config;

                    // error.response가 정의되어 있는지 확인
                    if (error.response) {
                        // 토큰이 만료된 경우
                        if (error.response.status === 401 && !prevRequest?._retry) {
                            prevRequest._retry = true;
                        try {
                            const result = await tokenMutation.mutateAsync();
                            prevRequest.headers['Authorization'] = `Bearer ${result.accessToken}`;

                            cookie.setCookie("token", {
                                ...token,
                                accessToken: result.accessToken,
                                expiresIn: result.expiresIn,
                            });

                            return privateBase(prevRequest);

                        } catch (tokenError) {
                            console.error('Token refresh error:', tokenError);
                            cookie.clearCookie();
                            queryClient.clear();
                            window.location.href = `/${LinkEnum.LOGIN}`;
                        }
                    }
                } else {
                    // error.response가 정의되지 않은 경우 처리
                    console.error('Network or other error:', error);
                }

                return Promise.reject(error);
            },
        );

        return () => {
            privateBase.interceptors.request.eject(requestIntercept);
            privateBase.interceptors.response.eject(responseIntercept);
        };
    }, [token, tokenMutation, queryClient]);

    return null;
};