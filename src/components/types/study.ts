/**
 * @brief 스터디 관련 타입
 */

export interface IStudy {
    code: number; // 스터디 코드
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    progress: number; // 과제 진행상황
    dDay: number; // 디데이
    bgImg: ICommonImgResponse; // 배경 이미지
    owner: boolean; // 관리자인지 아닌지
    bookmarking: boolean; // 찜 여부
    status: IStudyStatus; // 스터디 상태
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
    endPeriod: Date; // 종료기간
    dDay: number; // 디데이
    peopleCount: string; // 모집 인원
    joinCount: number; // 가입한 인원수
    joined: boolean; // 가입 여부
    bgImg: ICommonImgResponse; // 배경 이미지
    status: IStudyStatus; // 스터디 상태
    studyFull: boolean; // 정원 마감 여부
}

export interface ICommonStudyResponse {
    code: number;
    userCode: number;
    studyCode: number;
}

export interface IStudyBoard {
    code: number;
    studyCode: number;
    target: string; // notice or asgmt
    title: string; // 제목
    content: string; // 내용
    linkName?: string; // 링크제목
    linkUrl?: string; // 링크 url
    imgList?: ICommonImgResponse[]; // 이미지 리스트
    owner: boolean; // 관리자 여부
    submitted: boolean; // 과제 제출 여부
    notSubmitCount: number; // 과제 미제출한 인원수
    studyStatus: IStudyStatus; // 스터디 상태
    createdAt: Date; // 생성 날짜
}

export interface ICommonImgResponse {
    code: number;
    folderName: string;
    imgUrl: string;
}

export enum IStudyStatus {
    STUDYING = "STUDYING",
    FINISHED = "FINISHED",
}