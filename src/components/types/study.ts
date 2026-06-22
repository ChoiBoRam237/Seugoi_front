/**
 * @brief 스터디 관련 타입
 */

export interface IStudy {
    adminCode: number; // 관리자 코드
    studyCode: number; // 스터디 코드
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    progress: number; // 과제 진행상황
    dDay: number; // 디데이
    bgImageUrl: string; // 배경 이미지
    isBookmark: boolean; // 찜 여부
}

export interface IStudyDetail {
    studyCode: number; // 스터디 코드
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    studyTitle: string; // 스터디 제목
    summary: string; // 간단 요약
    introduction: string[]; // 소개글
    description: string; // 설명글
    recommend: string[]; // 추천글
    progress: number; // 과제 진행상황
    dDay: number; // 디데이
    peopleCount: string; // 모집 인원
    joinCount: number; // 가입한 인원수
    isJoined: boolean; // 가입 여부
    bgImageUrl: string; // 배경 이미지
}