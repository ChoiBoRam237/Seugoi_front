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

/**
 * @brief 과제 상세
 */

export const StudyAsgmtDetail = () => {
    const controller = useControlAsgmtDetail();

    return (
        <>
            <LayoutInnerWrapper className="arrow">
                <CommonArrowHeader
                    moveUrl={`/${LinkEnum.STUDY}/${5}`}
                    options={[]}
                />

                <AsgmtContainer>
                    {/* 과제 정보 */}
                    <AsgmtInfoContainer>
                        <AsgmtInfoWrapper>
                            <AsgmtInfoContent>
                                <AsgmtInfo>
                                    <AsgmtInfoText>2026.01.01</AsgmtInfoText>
                                    <AsgmtInfoTextWrapper>
                                        <FaRegCircleCheck size={17} color="var(--primary)" />
                                        <AsgmtInfoText>제출한 과제</AsgmtInfoText>
                                    </AsgmtInfoTextWrapper>
                                </AsgmtInfo>

                                <AsgmtInfoTitle>제목</AsgmtInfoTitle>

                                <AsgmtInfoPre>내용</AsgmtInfoPre>
                            </AsgmtInfoContent>

                            <AsgmtLinkWrapper>
                                <HiOutlineLink size={16} color="#0075FF" />
                                <AsgmtInfoText className="link">링크 제목</AsgmtInfoText>
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
            </LayoutInnerWrapper>
        </>
    )
}