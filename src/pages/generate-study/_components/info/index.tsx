import React, { useState } from "react";
import type { UploadChangeParam, UploadFile } from "antd/es/upload";
import { BiImageAdd } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { CommonInput } from "@/components/common/input";
import { CommonButton } from "@/components/common/button";
import { GenerateTitle } from "../../indexStyles";
import { InfoCategory, InfoContainer, InfoImageUpload, InfoImageUploadText, InfoInnerContainer, InfoInputRequired, InfoInputTitle, InfoInputTitleWrapper, InfoInputWrapper, InfoPeopleCheckbox, InfoPeopleCheckboxWrapper, InfoPeopleCountInnerWrapper, InfoPeopleCountInput, InfoPeopleCountWrapper, InfoShowImage, InfoUpload, InfoWrapper } from "./indexStyles";

/**
 * @brief 스터디의 기본정보 컴포넌트
 */

interface InfoProps {
    bgFile: File; // 대표 이미지
    setBgFile: React.Dispatch<React.SetStateAction<File>>;
    studyName: string; // 스터디 이름
    setStudyName: React.Dispatch<React.SetStateAction<string>>;
    categories: string[]; // 카테고리
    handleCategoryChange: (value: string, index: number) => void;
    peopleCount: string; // 인원
    setPeopleCount: React.Dispatch<React.SetStateAction<string>>;
}

export const Info = (props: InfoProps) => {
    const [previewBgFile, setPreviewBgFile] = useState<string>(""); // 이미지 미리보기

    return (
        <InfoContainer>
            <InfoInnerContainer>
                <GenerateTitle>스터디의 기본 정보를<br />입력해주세요!</GenerateTitle>

                <InfoWrapper>
                    <InfoInputWrapper>
                        <InfoInputTitleWrapper>
                            <InfoInputTitle>대표 이미지</InfoInputTitle>
                            <InfoInputRequired>*</InfoInputRequired>
                        </InfoInputTitleWrapper>

                        <InfoUpload
                            name="image-file"
                            accept="image/*"
                            showUploadList={false}
                            onChange={(info: UploadChangeParam<UploadFile>) => {
                                const file = info.file.originFileObj;
                                if (file) {
                                    props.setBgFile(file);
                                    setPreviewBgFile(URL.createObjectURL(file));
                                }
                            }}
                        >
                            {props.bgFile ? (
                                <InfoShowImage $src={previewBgFile} />
                            ) : (
                                <InfoImageUpload>
                                    <BiImageAdd size={33} color="rgba(255, 255, 255, 0.5)" />
                                    <InfoImageUploadText>어두운 배경의 사진은 잘 보이지 않습니다</InfoImageUploadText>
                                </InfoImageUpload>
                            )}
                        </InfoUpload>
                    </InfoInputWrapper>

                    <InfoInputWrapper>
                        <InfoInputTitleWrapper>
                            <InfoInputTitle>스터디 이름</InfoInputTitle>
                            <InfoInputRequired>*</InfoInputRequired>
                        </InfoInputTitleWrapper>

                        <CommonInput
                            placeholder="스터디 이름"
                            value={props.studyName}
                            onChange={(e) => props.setStudyName(e.target.value)}
                        />
                    </InfoInputWrapper>

                    <InfoInputWrapper>
                        <InfoInputTitle>카테고리</InfoInputTitle>

                        <InfoCategory>
                            {Array.from({ length: 3 }).map((_, index) => (
                                <CommonInput
                                    key={index}
                                    className="small"
                                    placeholder={`#카테고리 ${index+1}`}
                                    value={props.categories[index]}
                                    onChange={(e) => props.handleCategoryChange(e.target.value, index)}
                                />
                            ))}
                        </InfoCategory>
                    </InfoInputWrapper>

                    <InfoInputWrapper>
                        <InfoInputTitleWrapper>
                            <InfoInputTitle>인원</InfoInputTitle>
                            <InfoInputRequired>*</InfoInputRequired>
                        </InfoInputTitleWrapper>

                        <InfoPeopleCountWrapper>
                            <InfoPeopleCountInnerWrapper>
                                <IoPerson size={26} color="white" />
                                <InfoPeopleCountInput
                                    id="people-count"
                                    placeholder="최대 인원"
                                    value={props.peopleCount}
                                    onValueChange={(values) => props.setPeopleCount(values.value)}
                                    suffix="명"
                                />
                            </InfoPeopleCountInnerWrapper>

                            <InfoPeopleCheckboxWrapper>
                                <InfoPeopleCheckbox
                                    checked={props.peopleCount === '-'}
                                    onChange={(data) => {
                                        if (data.target.checked) props.setPeopleCount('-');
                                        else props.setPeopleCount("");
                                    }}
                                >
                                    인원 제한 없음
                                </InfoPeopleCheckbox>
                            </InfoPeopleCheckboxWrapper>
                        </InfoPeopleCountWrapper>
                    </InfoInputWrapper>
                </InfoWrapper>
            </InfoInnerContainer>

            <CommonButton
                disabled={false}
                bgColor="var(--primary)"
                text="다음"
            />
        </InfoContainer>
    )
}