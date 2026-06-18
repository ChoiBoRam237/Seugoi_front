import React from "react";
import { CommonButton } from "@/components/common/button";
import { CommonStudyIntro } from "@/components/common/study-intro";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { CommonGenerateContainer } from "../../indexStyles";
import { ContentContainer } from "./indexStyles";

/**
 * @brief 스터디 생성 -> 내용 컴포넌트
 */

interface ContentProps {
    bgImage: string; // 배경 이미지
    studyName: string; // 스터디 이름
    categories: string[]; // 카테고리
    peopleCount: string; // 모집 인원
    dDay: number | null; // 디데이

    studyTitle: string; // 스터디 제목
    setStudyTitle: React.Dispatch<React.SetStateAction<string>>;
    summary: string; // 간단 요약
    setSummary: React.Dispatch<React.SetStateAction<string>>;
    introduction: string[]; // 스터디 소개
    setIntroduction: React.Dispatch<React.SetStateAction<string[]>>;
    description: string; // 설명글
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    recommend: string[]; // 추천글
    setRecommend: React.Dispatch<React.SetStateAction<string[]>>;
    
    isDataCheck: boolean; // 필수 작성 데이터 체크
    onGenerateStudy: () => void; // 스터디 생성 api 호출
}

export const Content = (props: ContentProps) => {
    return (
        <ContentContainer>
            <CommonStudyInfoAndImage
                bgImage={props.bgImage}
                studyName={props.studyName}
                categories={props.categories}
                dDay={props.dDay}
            />

            <CommonGenerateContainer>
                <CommonStudyIntro
                    studyTitle={props.studyTitle}
                    setStudyTitle={props.setStudyTitle}
                    peopleCount={props.peopleCount}
                    summary={props.summary}
                    setSummary={props.setSummary}
                    introduction={props.introduction}
                    setIntroduction={props.setIntroduction}
                    description={props.description}
                    setDescription={props.setDescription}
                    recommend={props.recommend}
                    setRecommend={props.setRecommend}
                />

                <CommonButton
                    disabled={props.isDataCheck}
                    bgColor="var(--primary)"
                    text="스터디 만들기"
                    onClick={props.onGenerateStudy}
                />
            </CommonGenerateContainer>
        </ContentContainer>
    )
}