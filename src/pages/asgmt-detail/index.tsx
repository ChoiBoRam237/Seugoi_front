import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi";
import { LinkEnum } from "@/meta/link";
import { BASE_URL } from "@/util/api";
import { IStudyStatus } from "@/components/types/study";
import { CommonLoading } from "@/components/common/loading";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { Comment } from "./_components/comment";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonChatInput } from "@/components/common/chat-input";
import logoSad from "./_assets/logo-sad.svg";
import { AsgmtCommentList, AsgmtCommentNoData, AsgmtCommentNoDataImg, AsgmtContainer, AsgmtImageItem, AsgmtImageList, AsgmtInfo, AsgmtInfoContainer, AsgmtInfoContent, AsgmtInfoInnerWrapper, AsgmtInfoPre, AsgmtInfoText, AsgmtInfoTextWrapper, AsgmtInfoTitle, AsgmtInfoWrapper, AsgmtLine, AsgmtLinkWrapper } from "./indexStyles";
import { useControlAsgmtDetail } from "./index.control";

/**
 * @brief 과제 상세
 */

export const AsgmtDetail = () => {
    const navigate = useNavigate();
    const controller = useControlAsgmtDetail();

    return (
        <>
            {(!controller.isLoading && controller.asgmtData) ? (
                <LayoutInnerWrapper className="arrow">
                    <CommonArrowHeader
                        moveUrl={`/${LinkEnum.STUDY}/${controller.studyCode}`}
                        urlState={{ status: "assignment" }}
                        options={
                            controller.asgmtData.isAdmin 
                                ? [
                                    { text: "수정하기", textColor: "white", onClick: () => navigate(`/${LinkEnum.ASGMT}/${controller.asgmtData.code}/${LinkEnum.UPDATE}`) },
                                    { text: "삭제하기", textColor: "var(--red)", onClick: () => controller.setDeleteAsgmtOpen(true) }
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
                                        <AsgmtInfoText>{format(controller.asgmtData.createdAt, "yyyy.MM.dd")}</AsgmtInfoText>
                                        
                                        {controller.asgmtData.isAdmin ? (
                                            <>
                                                {controller.asgmtData.notSubmitCount === 0 ? (
                                                    <AsgmtInfoText>전원 제출</AsgmtInfoText>
                                                ) : controller.asgmtData.notSubmitCount === -1 ? (
                                                    <AsgmtInfoText className="dark">가입자 없음</AsgmtInfoText>
                                                ) : (
                                                    <AsgmtInfoText>{controller.asgmtData.notSubmitCount}명 미제출</AsgmtInfoText>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {controller.asgmtComment.submitted ? (
                                                    <AsgmtInfoTextWrapper>
                                                        <FaRegCircleCheck size={17} color="var(--primary)" />
                                                        <AsgmtInfoText>제출한 과제</AsgmtInfoText>
                                                    </AsgmtInfoTextWrapper>
                                                ) : (
                                                    <AsgmtInfoTextWrapper>
                                                        <FaRegCircleXmark size={17} color="var(--red)" />
                                                        <AsgmtInfoText className="error">미제출한 과제</AsgmtInfoText>
                                                    </AsgmtInfoTextWrapper>
                                                )}
                                            </>
                                        )}
                                    </AsgmtInfo>

                                    <AsgmtInfoTitle>{controller.asgmtData.title}</AsgmtInfoTitle>

                                    <AsgmtInfoPre>{controller.asgmtData.content}</AsgmtInfoPre>
                                </AsgmtInfoContent>

                                <AsgmtInfoInnerWrapper>
                                    {controller.asgmtData.imgList.length > 0 && (
                                        <AsgmtImageList>
                                            {controller.asgmtData.imgList.map((img, index) => (
                                                <AsgmtImageItem
                                                    key={index}
                                                    $src={`${BASE_URL}${img.folderName}${img.imgUrl}`}
                                                />
                                            ))}
                                        </AsgmtImageList>
                                    )}

                                    <AsgmtLinkWrapper onClick={() => window.open(controller.asgmtData.linkUrl, "_blank")}>
                                        <HiOutlineLink size={16} color="#0075FF" className="shrink-0 mt-1" />
                                        <AsgmtInfoText className="link">{controller.asgmtData.linkName}</AsgmtInfoText>
                                    </AsgmtLinkWrapper>
                                </AsgmtInfoInnerWrapper>
                            </AsgmtInfoWrapper>

                            <AsgmtLine />
                        </AsgmtInfoContainer>

                        {/* 댓글 */}
                        {(controller.asgmtComment.submitted && controller.asgmtComment.comments?.length > 0) ? (
                            <AsgmtCommentList>
                                {controller.asgmtComment.comments?.map((comment, index) => (
                                    <Comment
                                        key={index}
                                        isAdmin={controller.asgmtData.isAdmin}
                                        data={comment}
                                        isStudying={controller.asgmtData.studyStatus === IStudyStatus.STUDYING}
                                    />
                                ))}
                            </AsgmtCommentList>
                        ) : (
                            <AsgmtCommentNoData>
                                <AsgmtCommentNoDataImg $src={logoSad} />
                                {"과제를 제출하기 전까진 댓글을 볼 수 없습니다 ;("}
                            </AsgmtCommentNoData>
                        )}
                    </AsgmtContainer>

                    <CommonChatInput
                        isLoading={controller.isGenerateLoading}
                        loadingText="과제 제출 중..."
                        disabled={controller.asgmtData.studyStatus === IStudyStatus.FINISHED}
                        placeholder={
                            controller.asgmtData.studyStatus === IStudyStatus.STUDYING
                            ? controller.asgmtData.isAdmin
                                ? "내용을 입력해 주세요! (이미지 최대 3장)"
                                : "과제를 제출해주세요! (이미지 최대 3장)"
                            : "스터디가 종료되어 입력할 수 없습니다."
                        }
                        value={controller.comment}
                        setValue={controller.setComment}
                        previewImgList={controller.previewImgList}
                        setPreviewImgList={controller.setPreviewImgList}
                        setImageList={controller.setImageList}
                        onSend={controller.onGenerateAsgmtComment}
                    />
                </LayoutInnerWrapper>
            ) : (
                <CommonLoading />
            )}

            <CommonConfirmModal
                open={controller.deleteAsgmtOpen}
                setOpen={controller.setDeleteAsgmtOpen}
                title="과제를 삭제하시겠습니까?"
                content="삭제할 과제와 관련된 모든 정보는 복구할 수 없습니다."
                onOk={controller.onDeleteAsgmt}
            />
        </>
    )
}