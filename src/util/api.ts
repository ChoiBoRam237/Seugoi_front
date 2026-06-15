/**
 * @brief API 주소
 */

import axios from "axios";

// 카카오 로그인 주소소
export const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;

// 카카오 클라이언트 아이디
export const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

// 카카오 리다이렉트 주소
export const KAKAO_REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL;

// 백엔드 API 주소
export const BASE_URL = import.meta.env.VITE_BE;

// API 설정
export const publicBase = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
});