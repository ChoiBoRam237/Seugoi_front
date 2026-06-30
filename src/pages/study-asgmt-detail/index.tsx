import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi";
import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonChatInput } from "@/components/common/chat-input";
import logoSad from "./_assets/logo-sad.svg";
import { AsgmtCommentNoData, AsgmtCommentNoDataImg, AsgmtContainer, AsgmtInfo, AsgmtInfoContainer, AsgmtInfoContent, AsgmtInfoPre, AsgmtInfoText, AsgmtInfoTextWrapper, AsgmtInfoTitle, AsgmtInfoWrapper, AsgmtLine, AsgmtLinkWrapper } from "./indexStyles";
import { useControlAsgmtDetail } from "./index.control";
import { format } from "date-fns";
import { CommonLoading } from "@/components/common/loading";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";

/**
 * @brief 과제 상세
 */

export const StudyAsgmtDetail = () => {
    const controller = useControlAsgmtDetail();

    return (
        <>
            {(!controller.isLoading && controller.asgmtInfoData) ? (
                <LayoutInnerWrapper className="arrow">
                    <CommonArrowHeader
                        moveUrl={`/${LinkEnum.STUDY}/${controller.studyCode}`}
                        options={
                            controller.asgmtInfoData.isAdmin 
                                ? [
                                    { text: "수정하기", textColor: "white", onClick: () => {} },
                                    { text: "삭제하기", textColor: "#DD5252", onClick: () => {} }
                                  ]
                                : []
                        }
                    />

                    <AsgmtContainer>
                        {/* 과제 정보 */}
                        <AsgmtInfoContainer>
                            <AsgmtInfoWrapper>
                                <AsgmtInfoContent>
                                    <AsgmtInfo>
                                        <AsgmtInfoText>{format(controller.asgmtInfoData.createdAt, "yyyy.MM.dd")}</AsgmtInfoText>
                                        <AsgmtInfoTextWrapper>
                                            <FaRegCircleCheck size={17} color="var(--primary)" />
                                            <AsgmtInfoText>제출한 과제</AsgmtInfoText>
                                        </AsgmtInfoTextWrapper>
                                    </AsgmtInfo>

                                    <AsgmtInfoTitle>{controller.asgmtInfoData.title}</AsgmtInfoTitle>

                                    <AsgmtInfoPre>{controller.asgmtInfoData.content}</AsgmtInfoPre>
                                </AsgmtInfoContent>

                                <AsgmtLinkWrapper onClick={() => window.open(controller.asgmtInfoData.linkUrl, "_blank")}>
                                    <HiOutlineLink size={16} color="#0075FF" />
                                    <AsgmtInfoText className="link">{controller.asgmtInfoData.linkName}</AsgmtInfoText>
                                </AsgmtLinkWrapper>
                            </AsgmtInfoWrapper>

                            <AsgmtLine />
                        </AsgmtInfoContainer>

                        {/* 댓글 */}
                        <AsgmtCommentNoData>
                            <AsgmtCommentNoDataImg $src={logoSad} />
                            {"과제를 제출하기 전까진 댓글을 볼 수 없습니다 ;("}
                        </AsgmtCommentNoData>
                    </AsgmtContainer>

                    <CommonChatInput
                        placeholder="과제를 제출해주세요! (이미지 최대 3장)"
                        value={controller.comment}
                        setValue={controller.setComment}
                        previewImgList={controller.previewImgList}
                        setPreviewImgList={controller.setPreviewImgList}
                        setImageList={controller.setImageList}
                        onSend={() => {}}
                    />

                    {controller.deleteAsgmtOpen && (
                        <CommonConfirmModal
                            open={controller.deleteAsgmtOpen}
                            setOpen={controller.setDeleteAsgmtOpen}
                            title="과제를 삭제하시겠습니까?"
                            content="삭제된 과제와 관련된 모든 정보는 복구할 수 없습니다."
                            onOk={() => {}}
                        />
                    )}
                </LayoutInnerWrapper>
            ) : (
                <CommonLoading />
            )}
        </>
    )
}