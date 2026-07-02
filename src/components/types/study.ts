/**
 * @brief 스터디 관련 타입
 */

export interface IStudy {
    code: number; // 스터디 코드
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    progress: number; // 과제 진행상황
    dDay: number; // 디데이
    bgImageUrl: string; // 배경 이미지
    isAdmin: boolean; // 관리자인지 아닌지
    isBookmark: boolean; // 찜 여부
}

export interface IStudyDetail {
    code: number; // 스터디 코드
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    studyTitle: string; // 스터디 제목
    summary: string; // 간단 요약
    introduction: string[]; // 소개글
    description: string; // 설명글
    recommend: string[]; // 추천글
    progress: number; // 과제 진행상황
    endPeriod: string; // 종료기간
    dDay: number; // 디데이
    peopleCount: string; // 모집 인원
    joinCount: number; // 가입한 인원수
    isJoined: boolean; // 가입 여부
    bgImageUrl: string; // 배경 이미지
}

export interface ICommonStudyResponse {
    code: number;
    userCode: number;
    studyCode: number;
}

export interface IStudyBoard {
    code: number;
    target: string; // notice or asgmt
    title: string; // 제목
    content: string; // 내용
    linkName?: string; // 링크제목
    linkUrl?: string; // 링크 url
    imageList?: string[]; // 이미지 리스트
    isAdmin: boolean; // 관리자 여부
    createdAt: Date; // 생성 날짜
}