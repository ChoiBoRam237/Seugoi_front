import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { LinkEnum } from "@/meta/link";
import { Info } from "./_components/info";
import { Content } from "./_components/content";
import { Period } from "./_components/period";
import { FormContainer, FormHeader, FormHeaderNumber, FormHeaderNumberWrapper } from "./indexStyles";
import { useControlStudyForm } from "./index.control";
import React from "react";

/**
 * @brief 스터디 폼 컴포넌트
 */

interface Props {
    bgFile: File; // 대표 이미지
    setBgFile: React.Dispatch<React.SetStateAction<File>>;
    previewBgFile: string; // 이미지 미리보기
    setPreviewBgFile: React.Dispatch<React.SetStateAction<string>>;
    studyName: string; // 스터디 이름
    setStudyName: React.Dispatch<React.SetStateAction<string>>;
    categories: string[]; // 카테고리
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
    peopleCount: string; // 모집 인원
    setPeopleCount: React.Dispatch<React.SetStateAction<string>>;
    
    endPeriod: string; // 종료기간
    setEndPeriod: React.Dispatch<React.SetStateAction<string>>;
    dDay: number | null; // 디데이
    setDDay: React.Dispatch<React.SetStateAction<number | null>>;

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
    
    btnText: string; // 버튼 내용
    isLoading: boolean;
    onClick: () => void;
}

export const CommonStudyForm = (props: Props) => {
    const navigate = useNavigate();
    const controller = useControlStudyForm();

    const handleCategoryChange = (value: string, index: number) => {
        const formatted = (value.length === 0 || value === "#") // 값이 없거나, #만 있을 경우
            ? ""
            : value.startsWith("#")
                ? value
                : `# ${value}`;
        
        props.setCategories(prev => prev.map((item, i) => (i === index ? formatted : item)));
    };

    // 필수로 작성해야하는 데이터 모두 작성했으면 true, 아니면 false
    const isDataCheck = () => {
        return props.bgFile && props.studyName !== "" && props.peopleCount !== "";
    }

    const isNumberActive = (status: string) => {
        return controller.status === status ? "active" : "";
    }

    const onClickNumber = (status: string) => {
        controller.setStatus(status);
    }

    return (
        <FormContainer>
            <FormHeader>
                <FormHeaderNumberWrapper>
                    <FormHeaderNumber
                        className={`${isNumberActive("info")}`}
                        onClick={() => onClickNumber("info")}
                    >1</FormHeaderNumber>

                    <FormHeaderNumber
                        disabled={!isDataCheck()}
                        className={`${isNumberActive("period")} ${isDataCheck() ? "" : "disabled"}`}
                        onClick={() => isDataCheck() && onClickNumber("period")}
                    >2</FormHeaderNumber>

                    <FormHeaderNumber
                        disabled={!isDataCheck()}
                        className={`${isNumberActive("content")} ${isDataCheck() ? "" : "disabled"}`}
                        onClick={() => isDataCheck() && onClickNumber("content")}
                    >3</FormHeaderNumber>
                </FormHeaderNumberWrapper>

                <button onClick={() => navigate(`/${LinkEnum.HOME}`)}>
                    <TiHome size={25} color="#76778B" />
                </button>
            </FormHeader>

            {controller.status === "info" ? (
                <Info
                    bgFile={props.bgFile}
                    setBgFile={props.setBgFile}
                    previewBgFile={props.previewBgFile}
                    setPreviewBgFile={props.setPreviewBgFile}
                    studyName={props.studyName}
                    setStudyName={props.setStudyName}
                    categories={props.categories}
                    handleCategoryChange={handleCategoryChange}
                    peopleCount={props.peopleCount}
                    setPeopleCount={props.setPeopleCount}
                    isDataCheck={!isDataCheck()}
                    onNext={() => controller.setStatus("period")}
                />
            ) : controller.status === "period" ? (
                <Period
                    endPeriod={props.endPeriod}
                    setEndPeriod={props.setEndPeriod}
                    dDay={props.dDay}
                    setDDay={props.setDDay}
                    isDataCheck={!isDataCheck()}
                    onNext={() => controller.setStatus("content")}
                />
            ) : (
                <Content
                    bgImage={props.previewBgFile}
                    studyName={props.studyName}
                    categories={props.categories}
                    peopleCount={props.peopleCount}
                    dDay={props.dDay}
                    
                    studyTitle={props.studyTitle}
                    setStudyTitle={props.setStudyTitle}
                    summary={props.summary}
                    setSummary={props.setSummary}
                    introduction={props.introduction}
                    setIntroduction={props.setIntroduction}
                    description={props.description}
                    setDescription={props.setDescription}
                    recommend={props.recommend}
                    setRecommend={props.setRecommend}
                    isDataCheck={!isDataCheck()}

                    btnText={props.btnText}
                    isLoading={props.isLoading}
                    onStudyGenerate={props.onClick}
                />
            )}
        </FormContainer>
    )
}