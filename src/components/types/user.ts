/**
 * @brief 유저 관련 타입
 */

export interface IUser {
    userCode: number; // 유저 코드
    kakaoId: number; // 카카오 아이디
    name: string; // 이름
    profileImgUrl: string; // 프로필 이미지
    email: string; // 이메일
}