import { HiOutlineLink } from "react-icons/hi";
import { IoMdImage } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { Upload } from "antd";
import { CommonButton } from "@/components/molecules/button";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { BoardContainer, BoardWrapper } from "../../indexStyles";
import { BoardProps } from "../..";
import { AsgmtImageItem, AsgmtImageItemX, AsgmtImageLabel, AsgmtImageLabelWrapper, AsgmtImageList, AsgmtImageUplaod, AsgmtImageWrapper } from "./indexStyles";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useControlAssignment } from "./index.control";
import { CommonModal } from "@/components/molecules/modal";
import { LinkEnum } from "@/meta/link";
import { useNavigate } from "react-router-dom";

/**
 * @brief 과제 추가
 */

export const Assignment = (props: BoardProps) => {
    const navigate = useNavigate();
    const controller = useControlAssignment();

    return (
        <BoardContainer>
            <BoardWrapper>
                <CommonInput
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    labelText="과제 제목"
                    input={[
                        { 
                            placeholder: "제목을 입력해주세요", 
                            value: controller.title, 
                            onChange: (e) => controller.setTitle(e.target.value)
                        }
                    ]}
                />

                <CommonTextarea
                    placeholder="내용을 입력해주세요"
                    labelText="과제 내용"
                    value={controller.content}
                    setValue={controller.setContent}
                />

                <CommonInput
                    labelText="링크 추가하기"
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    Icon={<HiOutlineLink size={16} color="white" />}
                    input={[
                        { 
                            placeholder: "링크 이름", 
                            className: "w-full flex-auto md:flex-1", 
                            value: controller.linkName, 
                            onChange: (e) => controller.setLinkName(e.target.value)
                        },
                        { 
                            placeholder: "주소를 입력해주세요", 
                            className: "w-full flex-auto md:flex-3", 
                            value: controller.linkUrl,
                            onChange: (e) => controller.setLinkUrl(e.target.value)
                        },
                    ]}
                />

                <AsgmtImageWrapper>
                    <AsgmtImageLabelWrapper>
                        <IoMdImage size={16} color="white" />
                        <AsgmtImageLabel>이미지 추가하기 (최대 5개)</AsgmtImageLabel>
                    </AsgmtImageLabelWrapper>

                    <AsgmtImageList>
                        <Upload
                            name="image-file"
                            accept="image/*"
                            showUploadList={false}
                            multiple={true}
                            maxCount={5}
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
                                const validFiles = info.fileList.filter(file => {
                                    const isLt10MB = (file.size ?? 0) / 1024 / 1024 <= 10;
                                    return isLt10MB && file.originFileObj;
                                });
                                
                                controller.setImageList(
                                    validFiles.map(file => file.originFileObj as File)
                                );

                                controller.setPreviewImageList(
                                    validFiles.map(file =>
                                        URL.createObjectURL(file.originFileObj as File)
                                    )
                                );
                            }}
                        >
                            <AsgmtImageUplaod>
                                <FiPlus size={24} color="var(--gray-dark)" />
                            </AsgmtImageUplaod>
                        </Upload>

                        {controller.imageList.length > 0 && (
                            <>
                                {controller.previewImageList.map((image, index) => (
                                    <div className="relative">
                                        <AsgmtImageItem
                                            key={index}
                                            $src={image}
                                        />

                                        <AsgmtImageItemX
                                            onClick={() => {
                                                controller.setImageList(
                                                    controller.imageList.filter(prev => prev !== controller.imageList[index])
                                                );

                                                controller.setPreviewImageList(
                                                    controller.previewImageList.filter(prev => prev !== image)
                                                );
                                            }}
                                        >
                                            <GoXCircle size={16} color="red" />
                                        </AsgmtImageItemX>
                                    </div>
                                ))}
                            </>
                        )}
                    </AsgmtImageList>
                </AsgmtImageWrapper>
            </BoardWrapper>

            <CommonButton
                loading={controller.isLoading}
                disabled={!controller.dataCheck()}
                text="과제 추가하기"
                bgColor="var(--primary)"
                onClick={() => controller.onGenerate(Number(props.studyCode))}
            />

            <CommonModal
                open={controller.successOpen}
                setOpen={controller.setSuccessOpen}
                title="과제가 생성되었습니다!"
                btnTitle="과제로 이동"
                onClick={() => navigate(`/${LinkEnum.STUDY}/${controller.successData.studyCode}/${LinkEnum.ASGMT}/${controller.successData.code}`)}
            />
        </BoardContainer>
    )
}