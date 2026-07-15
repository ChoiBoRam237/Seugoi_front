import React from "react";
import { Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { HiOutlineLink } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { IoMdImage } from "react-icons/io";
import { CommonButton } from "@/components/molecules/button";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { AsgmtFormContainer, AsgmtFormImageItem, AsgmtFormImageItemX, AsgmtFormImageLabel, AsgmtFormImageLabelWrapper, AsgmtFormImageList, AsgmtFormImageUplaod, AsgmtFormImageWrapper, AsgmtFormWrapper } from "./indexStyles";

/**
 * @brief 과제 폼
 */

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    linkName: string;
    setLinkName: React.Dispatch<React.SetStateAction<string>>;
    linkUrl: string;
    setLinkUrl: React.Dispatch<React.SetStateAction<string>>;
    imgList: File[];
    setImgList: React.Dispatch<React.SetStateAction<File[]>>;
    previewImgList: string[];
    setPreviewImgList: React.Dispatch<React.SetStateAction<string[]>>;
    
    className?: string;
    btnText: string;
    isLoading: boolean;
    onClick: () => void;
}

export const CommonAsgmtForm = (props: Props) => {
    // 모든 데이터 중 하나만 있으면 true, 아니면 false
    const dataCheck = () => {
        return props.title !== "" || props.content !== ""
            || props.linkUrl !== "" || props.imgList.length > 0;
    }

    return (
        <AsgmtFormContainer className={props.className}>
            <AsgmtFormWrapper>
                <CommonInput
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    labelText="과제 제목"
                    input={[
                        { 
                            placeholder: "제목을 입력해주세요", 
                            value: props.title, 
                            onChange: (e) => props.setTitle(e.target.value)
                        }
                    ]}
                />

                <CommonTextarea
                    placeholder="내용을 입력해주세요"
                    labelText="과제 내용"
                    value={props.content}
                    setValue={props.setContent}
                />

                <CommonInput
                    labelText="링크 추가하기"
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    Icon={<HiOutlineLink size={16} color="white" />}
                    input={[
                        { 
                            placeholder: "링크 이름", 
                            className: "w-full flex-auto md:flex-1", 
                            value: props.linkName, 
                            onChange: (e) => props.setLinkName(e.target.value)
                        },
                        { 
                            placeholder: "주소를 입력해주세요", 
                            className: "w-full flex-auto md:flex-3", 
                            value: props.linkUrl,
                            onChange: (e) => props.setLinkUrl(e.target.value)
                        },
                    ]}
                />

                <AsgmtFormImageWrapper>
                    <AsgmtFormImageLabelWrapper>
                        <IoMdImage size={16} color="white" />
                        <AsgmtFormImageLabel>이미지 추가하기 (최대 5개)</AsgmtFormImageLabel>
                    </AsgmtFormImageLabelWrapper>

                    <AsgmtFormImageList>
                        <Upload
                            name="image-file"
                            accept="image/*"
                            showUploadList={false}
                            multiple={true}
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
                            onChange={(info) => {
                                const file = info.file as RcFile;
                            
                                if (!file) return;
                            
                                props.setImgList(prev => {
                                    if (prev.length >= 5) return prev;
                                    return [...prev, file];
                                });
                            
                                props.setPreviewImgList(prev => {
                                    if (prev.length >= 5) return prev;
                                    return [...prev, URL.createObjectURL(file)];
                                });
                            }}
                        >
                            <AsgmtFormImageUplaod>
                                <FiPlus size={24} color="var(--gray-dark)" />
                            </AsgmtFormImageUplaod>
                        </Upload>

                        {props.previewImgList.length > 0 && (
                            <>
                                {props.previewImgList.map((img, index) => (
                                    <div className="relative" key={index}>
                                        <AsgmtFormImageItem $src={img} />

                                        <AsgmtFormImageItemX
                                            onClick={() => {
                                                props.setImgList(
                                                    props.imgList.filter(prev => prev !== props.imgList[index])
                                                );

                                                props.setPreviewImgList(
                                                    props.previewImgList.filter(prev => prev !== img)
                                                );
                                            }}
                                        >
                                            <GoXCircle size={16} color="red" />
                                        </AsgmtFormImageItemX>
                                    </div>
                                ))}
                            </>
                        )}
                    </AsgmtFormImageList>
                </AsgmtFormImageWrapper>
            </AsgmtFormWrapper>

            <CommonButton
                loading={props.isLoading}
                disabled={!dataCheck()}
                text={props.btnText}
                bgColor="var(--primary)"
                onClick={props.onClick}
            />
        </AsgmtFormContainer>
    )
}