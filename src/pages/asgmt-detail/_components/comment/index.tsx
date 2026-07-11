import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import { Spin, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { LoadingOutlined } from "@ant-design/icons";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { BsImages } from "react-icons/bs";
import { CommonOverflowMenu } from "@/components/common/overflow-menu";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { IAsgmtCommentItem } from "../../index.type";
import { ImgView } from "../img-view";
import { CommentContainer, CommentProfile, CommentWrapper, CommentContent, CommentContentText, CommentInfo, CommentInfoName, CommentInfoDate, CommentImage, CommentImageList, CommentContentTextarea, CommentRemoveButton, CommentImageWrapper, CommentSaveWrapper, CommentSaveButton, CommentUploadImage, CommentAdminButton } from "./indexStyles";
import { useControlComment } from "./index.control";

/**
 * @breif 과제 댓글
 */

export interface CommentProps {
    owner: boolean;
    data: IAsgmtCommentItem;
    isStudying: boolean;
}

export const Comment = (props: CommentProps) => {
    const controller = useControlComment(props);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = (textarea: HTMLTextAreaElement) => {
        textarea.style.height = "40px";
    
        const maxHeight = 5 * 16;
        const height = Math.min(textarea.scrollHeight, maxHeight);
    
        textarea.style.height = `${height}px`;
        textarea.style.overflowY =
            textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    };

    const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        resizeTextarea(e.target);
        controller.setValue(e.target.value);
    }

    useEffect(() => {
        if (textareaRef.current) {
            resizeTextarea(textareaRef.current);
        }
    }, [props.data.comment, controller.status]);

    return (
        <CommentContainer>
            <CommentProfile $src={props.data.user.profileImgUrl} />

            <CommentWrapper>
                <CommentContent>
                    <CommentInfo>
                        <div className="flex flex-col gap-1">
                            <CommentInfoName>{props.data.user.name}</CommentInfoName>
                            <CommentInfoDate>{format(props.data.createdAt, "yyyy.MM.dd")}</CommentInfoDate>
                        </div>

                        <div className="flex items-center gap-1">
                            {props.owner ? (
                                <>
                                    {!props.data.writerOwner && (
                                        <CommentAdminButton
                                            disabled={props.data.isAdminCheck || controller.submitLoading}
                                            className={props.data.isAdminCheck.toString()}
                                            onClick={controller.onSubmit}
                                        >
                                            {props.data.isAdminCheck ? (
                                                <span>확인 완료</span>
                                            ) : (
                                                <span>확인</span>
                                            )}
                                        </CommentAdminButton>
                                    )}
                                </>
                            ) : (
                                <>
                                    {!controller.submitLoading ? (
                                        <>
                                            {props.data.isAdminCheck ? (
                                                <CommentContentText className="success">체크 완료</CommentContentText>
                                            ) : (
                                                <CommentContentText className="wait">체크 대기중</CommentContentText>
                                            )}
                                        </>
                                    ) : (
                                        <Spin indicator={<LoadingOutlined spin style={{ color: "white", fontSize: "0.75rem" }} />} />
                                    )}
                                </>
                            )}
                            
                            {(props.data.writerOwner && props.isStudying) && (
                                <div className="relative cursor-pointer" onClick={() => controller.setOverflowMenuOpen(true)}>
                                    <HiOutlineDotsVertical size={16} color="white" />

                                    <CommonOverflowMenu
                                        open={controller.overflowMenuOpen}
                                        setOpen={controller.setOverflowMenuOpen}
                                        options={[
                                            { text: "수정하기", textColor: "white", onClick: () => controller.setStatus("update") },
                                            { text: "삭제하기", textColor: "var(--red)", onClick: () => controller.setDeleteAsgmtCmtOpen(true) },
                                        ]}
                                        className="small"
                                    />
                                </div>
                            )}
                        </div>
                    </CommentInfo>

                    {controller.status === "read" ? (
                        <CommentContentText>{props.data.comment}</CommentContentText>
                    ) : (
                        <CommentContentTextarea
                            id="comment"
                            ref={textareaRef}
                            placeholder="댓글 내용을 입력하세요"
                            value={controller.value}
                            onChange={onTextareaChange}
                        />
                    )}
                </CommentContent>

                <CommentImageList>
                    {controller.previewImgList.map((img, index) => (
                        <CommentImageWrapper key={index}>
                            <CommentImage
                                $src={img}
                                onClick={() => {
                                    controller.setImgViewStartIndex(index);
                                    controller.setImgViewOpen(true);
                                }}
                            />

                            {controller.status === "update" && (
                                <CommentRemoveButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();

                                        controller.setImgList(
                                            controller.imgList.filter(prev => prev !== controller.imgList[index])
                                        );

                                        controller.setPreviewImgList(
                                            controller.previewImgList.filter(prev => prev !== img)
                                        );
                                    }}
                                >
                                    <HiMiniXMark size={16} color="white" />
                                </CommentRemoveButton>
                            )}
                        </CommentImageWrapper>
                    ))}

                    {(controller.status === "update" && 
                        controller.previewImgList.length < 3) && (
                            <CommentImageWrapper>
                                <Upload
                                    name="image-file"
                                    accept="image/*"
                                    showUploadList={false}
                                    multiple={true}
                                    maxCount={3}
                                    className="w-full! h-full! cursor-pointer"
                                    style={{ width: "100%", height: "100%" }}
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
                                    
                                        controller.setImgList(prev => {
                                            if (prev.length >= 3) return prev;
                                            return [...prev, file];
                                        });
                                    
                                        controller.setPreviewImgList(prev => {
                                            if (prev.length >= 3) return prev;
                                            return [...prev, URL.createObjectURL(file)];
                                        });
                                    }}
                                >
                                    <CommentUploadImage>
                                        <BsImages size={20} color="white" />
                                        {`이미지 추가하기 (${controller.previewImgList.length} / 3)`}
                                    </CommentUploadImage>
                                </Upload>
                            </CommentImageWrapper>
                    )}
                </CommentImageList>

                {controller.status === "update" && (
                    <CommentSaveWrapper>
                        <CommentSaveButton
                            disabled={controller.updateLoading}
                            onClick={controller.onUpdateAsgmtCmt}
                        >
                            {!controller.updateLoading ? 
                                "수정하기" 
                            : (
                                <Spin indicator={<LoadingOutlined spin style={{ color: "white", fontSize: "0.875rem" }} />} />
                            )}
                        </CommentSaveButton>
                    </CommentSaveWrapper>
                )}
            </CommentWrapper>

            <CommonConfirmModal
                open={controller.updateOpen}
                setOpen={controller.setUpdateOpen}
                title="댓글이 수정되었습니다!"
                content=""
                cancelTitle="계속 수정하기"
                onOk={() => {
                    controller.onFetch();
                    controller.setStatus("read");
                    controller.setUpdateOpen(false);
                }}
            />

            <CommonConfirmModal
                open={controller.deleteAsgmtCmtOpen}
                setOpen={controller.setDeleteAsgmtCmtOpen}
                title="댓글을 삭제하시겠습니까?"
                content="삭제할 댓글과 관련된 정보는 복구할 수 없습니다."
                onOk={controller.onDeleteAsgmtCmt}
            />

            <ImgView
                open={controller.imgViewOpen}
                setOpen={controller.setImgViewOpen}
                startIndex={controller.imgViewStartIndex}
                imgUrlList={props.data.imgList.map(item => item.imgUrl)}
            />
        </CommentContainer>
    )
}