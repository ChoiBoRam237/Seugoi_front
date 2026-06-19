import { cookie } from "@/util/cookies";

/**
 * @brief 유저 정보 hook
 * @returns
 * userCode: 사용자 아이디
 * userName: 사용자 이름
 * userEmail: 사용자 이메일
 * userProfileUrl: 사용자 프로필 이미지
 */

export const useUserInfo = () => {
    const userInfo = cookie.getCookie("user");
    const userCode = userInfo.userId ?? 0;
    const userName = userInfo.name ?? "";
    const userEmail = userInfo.email ?? "";
    const userProfileUrl = userInfo.profileImageUrl ?? "";

    return {
        userCode,
        userName,
        userEmail,
        userProfileUrl,
    }
}