import axios from "axios";
import { cookie } from "./cookies";
import { LinkEnum } from "@/meta/link";

/**
 * @brief API 주소
 */

// 카카오 로그인 주소소
export const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;

// 카카오 클라이언트 아이디
export const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

// 카카오 리다이렉트 주소
export const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

// 백엔드 API 주소
export const BASE_URL = import.meta.env.VITE_BE;

// 토큰 불필요
export const publicBase = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// 토큰 필요
export const privateBase = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// /**
//  * 사용자 인증된 Token이 담긴 axios 객체 생성
//  * @returns 토큰이 담긴 axios 객체
//  */
// export const privateBaseWithToken = () => {
// 	let tokenData = cookie.getCookie("token");
// 	console.log(tokenData)
// 	let token = '';
// 	let refreshToken = '';

// 	// 토큰 데이터가 쿠키에 저장되어 있는 체크
// 	if (tokenData) {
// 		token = tokenData.accessToken;
// 		refreshToken = tokenData.refreshToken;
// 	}

// 	const instance = axios.create({
// 		baseURL: BASE_URL,
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: `Bearer ${token}`
// 		},
// 		withCredentials: true,
// 	});

// 	// 응답 인터셉터 추가
// 	instance.interceptors.response.use((reponse) => reponse,
// 		async (error) => {
// 			const originalRequest = error.config;

// 			// 토큰이 만료되었고, 재시도하지 않은 경우
// 			if (error.response && error.response.status === 401 && !originalRequest._retry) {
// 				originalRequest._retry = true;

// 				try {
// 					const response = await publicBase.get(`/v2/kakao/refresh`, {
// 						headers: {
// 							Authorization: `Breaer ${refreshToken}`
// 						}
// 					});
					
// 					// 새로운 accessToken
// 					const newAccessToken = response.data.data.accessToken;

// 					// 토큰 업데이트
// 					const updateTokenData = {
// 						...tokenData,
// 						accessToken: newAccessToken
// 					};
// 					cookie.setCookie("token", updateTokenData);

// 					// 새로운 accessToken으로 원래 요청 다시 실행
// 					originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           			return axios(originalRequest);
// 				} catch(tokenRefreshError) {
// 					cookie.clearCookie(); // 저장했던 토큰, 유저 데이터 삭제
// 					window.location.href = `/${LinkEnum.LOGIN}`; // 로그인 화면으로 이동
// 					return Promise.reject(tokenRefreshError);
// 				}
// 			}
// 			return Promise.reject(error);
// 		}
// 	);
// 	return instance;
// }