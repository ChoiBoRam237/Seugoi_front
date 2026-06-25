import React from "react";
import Upload from "antd/es/upload";
import type { UploadChangeParam, UploadFile } from "antd/es/upload";
import { BiImageAdd } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { CommonInput } from "@/components/molecules/input";
import { CommonButton } from "@/components/molecules/button";
import { CommonGenerateContainer, CommonGenerateTitle } from "../../indexStyles";
import { InfoCategory, InfoImageUpload, InfoImageUploadText, InfoInnerContainer, InfoInputRequired, InfoInputTitle, InfoInputTitleWrapper, InfoInputWrapper, InfoPeopleCheckbox, InfoPeopleCheckboxWrapper, InfoPeopleCountInnerWrapper, InfoPeopleCountInput, InfoPeopleCountWrapper, InfoShowImage, InfoUpload, InfoWrapper } from "./indexStyles";

/**
 * @brief 스터디 생성 -> 기본 정보 컴포넌트
 */

interface InfoProps {
    bgFile: File; // 대표 이미지
    setBgFile: React.Dispatch<React.SetStateAction<File>>;
    previewBgFile: string; // 이미지 미리보기
    setPreviewBgFile: React.Dispatch<React.SetStateAction<string>>;
    studyName: string; // 스터디 이름
    setStudyName: React.Dispatch<React.SetStateAction<string>>;
    categories: string[]; // 카테고리
    handleCategoryChange: (value: string, index: number) => void;
    peopleCount: string; // 모집 인원
    setPeopleCount: React.Dispatch<React.SetStateAction<string>>;
    isDataCheck: boolean; // 필수 작성 데이터 체크
    onNext: () => void; // 다음 버튼 클릭 시
}

export const Info = (props: InfoProps) => {
    return (
        <CommonGenerateContainer>
            <InfoInnerContainer>
                <CommonGenerateTitle>스터디의 기본 정보를<br />입력해주세요!</CommonGenerateTitle>

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
                            beforeUpload={(file) => {
                                const isLt10MB = file.size / 1024 / 1024 <= 10;
                        
                                if (!isLt10MB) {
                                    alert("이미지 용량은 10MB 이하만 업로드 가능합니다.");
                                    return Upload.LIST_IGNORE;
                                }

                                if (!file.type.includes("image")) {
                                    alert("이미지만 업로드가 가능합니다.")
                                    return Upload.LIST_IGNORE;
                                }
                        
                                return false; // 자동 업로드 방지
                            }}
                            onChange={(info: UploadChangeParam<UploadFile>) => {
                                const file = info.fileList[info.fileList.length - 1].originFileObj;
                                
                                if (!file) return;

                                const isLt10MB = file.size / 1024 / 1024 <= 10;

                                if (!isLt10MB) {
                                    props.setBgFile(undefined);
                                    props.setPreviewBgFile("");
                                    return;
                                }

                                props.setBgFile(file);
                                props.setPreviewBgFile(URL.createObjectURL(file));
                            }}
                        >
                            {props.bgFile ? (
                                <InfoShowImage $src={props.previewBgFile} />
                            ) : (
                                <InfoImageUpload>
                                    <BiImageAdd size={33} color="var(--white-50)" />
                                    <InfoImageUploadText>어두운 배경의 사진은 잘 보이지 않습니다</InfoImageUploadText>
                                </InfoImageUpload>
                            )}
                        </InfoUpload>
                    </InfoInputWrapper>

                    <CommonInput
                        labelText="스터디 이름"
                        required={true}
                        input={[
                            { 
                                placeholder: "스터디 이름", 
                                value: props.studyName, 
                                onChange: (e) => props.setStudyName(e.target.value) 
                            }
                        ]}
                    />

                    <InfoInputWrapper>
                        <InfoInputTitle>카테고리</InfoInputTitle>

                        <InfoCategory>
                            {props.categories.map((category, index) => (
                                <CommonInput
                                    key={index}
                                    className="small"
                                    input={[
                                        { 
                                            placeholder: `#카테고리 ${index+1}`, 
                                            value: category, 
                                            onChange: (e) => props.handleCategoryChange(e.target.value, index)
                                        }
                                    ]}
                                />
                            ))}
                        </InfoCategory>
                    </InfoInputWrapper>

                    <InfoInputWrapper>
                        <InfoInputTitleWrapper>
                            <InfoInputTitle>모집 인원</InfoInputTitle>
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
                                    checked={props.peopleCount === "-"}
                                    onChange={(data) => {
                                        if (data.target.checked) props.setPeopleCount("-");
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
                disabled={props.isDataCheck}
                bgColor="var(--primary)"
                text="다음"
                onClick={props.onNext}
            />
        </CommonGenerateContainer>
    )
}