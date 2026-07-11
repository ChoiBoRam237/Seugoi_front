import React from "react";
import { TiPin } from "react-icons/ti";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { BoardNoticeLine, BoardList, BoardNoticeItem, BoardPre, BoardNoticeTitle, BoardNoticeTitleWrapper, BoardAsgmtItem, BoardAsgmtInfoWrapper, BoardAsgmtInfoText, BoardAsgmtInfoTextWrapper, BoardAsgmtImageList, BoardAsgmtImage, BoardAsgmtImageWrapper, BoardAsgmtImageCount, BoardAsgmtTitle, BoardAsgmtLinkWrapper, BoardAsgmtLinkText, BoardAsgmtInfoContainer, BoardNoticeTitleContainer, BoardAddButton } from "./indexStyles";
import { useControlBoard } from "./index.control";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { CommonOverflowMenu } from "@/components/common/overflow-menu";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { BASE_URL } from "@/util/api";
import { useWindowSize } from "@/hooks/useWindowSize";

/**
 * @brief 과제 보기
 */

interface Props {
    studyCode: number;
    owner: boolean;
    isStudying: boolean;
}

export const Board = (props: Props) => {
    const navigate = useNavigate();
    const windowSize = useWindowSize();
    const controller = useControlBoard({ studyCode: props.studyCode });

    return (
        <BoardList>
            {controller.boardList.map((item, index) => (
                <React.Fragment key={index}>
                    {item.target === "notice" ? (
                        <BoardNoticeItem>
                            <BoardNoticeTitleContainer>
                                <BoardNoticeTitleWrapper>
                                    <TiPin size={20} color="#D51F1F" />
                                    <BoardNoticeTitle>{item.title}</BoardNoticeTitle>
                                </BoardNoticeTitleWrapper>

                                <div className="relative cursor-pointer" onClick={() => controller.setOverflowMenuOpen(true)}>
                                    <HiOutlineDotsVertical size={18} color="white" />

                                    {controller.overflowMenuOpen && (
                                        <CommonOverflowMenu
                                            open={controller.overflowMenuOpen}
                                            setOpen={controller.setOverflowMenuOpen}
                                            options={[
                                                { text: "수정하기", textColor: "white", onClick: () => navigate(`/${LinkEnum.NOTICE}/${item.code}/${LinkEnum.UPDATE}`) },
                                                { text: "삭제하기", textColor: "var(--red)", onClick: () => controller.setDeleteNoticeOpen(true) }
                                            ]}
                                            className="small"
                                        />
                                    )}
                                </div>
                            </BoardNoticeTitleContainer>
            
                            <BoardNoticeLine />
            
                            <BoardPre>{item.content}</BoardPre>
                        </BoardNoticeItem>
                    ) : (
                        <BoardAsgmtItem onClick={() => navigate(`/${LinkEnum.STUDY}/${props.studyCode}/${LinkEnum.ASGMT}/${item.code}`)}>
                            <BoardAsgmtInfoContainer>
                                <BoardAsgmtInfoWrapper>
                                    <BoardAsgmtInfoText>{format(item.createdAt, "yyyy.MM.dd")}</BoardAsgmtInfoText>
                
                                    {item.owner ? (
                                        <>
                                            {item.notSubmitCount === 0 ? (
                                                <BoardAsgmtInfoText>전원 제출</BoardAsgmtInfoText>
                                            ) : item.notSubmitCount === -1 ? (
                                                <BoardAsgmtInfoText className="dark">가입자 없음</BoardAsgmtInfoText>
                                            ) : (
                                                <BoardAsgmtInfoText className="error">{item.notSubmitCount}명 미제출</BoardAsgmtInfoText>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {item.submitted ? (
                                                <BoardAsgmtInfoTextWrapper>
                                                    <FaRegCircleCheck size={17} color="var(--primary)" />
                                                    <BoardAsgmtInfoText>제출한 과제</BoardAsgmtInfoText>
                                                </BoardAsgmtInfoTextWrapper>
                                            ) : (
                                                <BoardAsgmtInfoTextWrapper>
                                                    <FaRegCircleXmark size={17} color="var(--red)" />
                                                    <BoardAsgmtInfoText className="error">미제출한 과제</BoardAsgmtInfoText>
                                                </BoardAsgmtInfoTextWrapper>
                                            )}
                                        </>
                                    )}
                                </BoardAsgmtInfoWrapper>
                
                                <BoardAsgmtTitle>{item.title}</BoardAsgmtTitle>
                
                                <BoardPre>{item.content}</BoardPre>
                
                                {item?.imgList?.length > 0 && (() => {
                                    const count = windowSize.width > 767 ? 5
                                        : windowSize.width > 376 ? 4
                                        : 3

                                    return (
                                        <BoardAsgmtImageList>
                                            {item?.imgList?.slice(0, count).map((image, index) => (
                                                <BoardAsgmtImageWrapper key={index}>
                                                    <BoardAsgmtImage $src={`${BASE_URL}${image.folderName}${image.imgUrl}`} />
                                                    {item?.imgList?.length > count && <BoardAsgmtImageCount className="count">+ {(item.imgList.length - count)}</BoardAsgmtImageCount>}
                                                </BoardAsgmtImageWrapper>
                                            ))}
                                        </BoardAsgmtImageList>   
                                    )
                                })()}
                            </BoardAsgmtInfoContainer>
            
                           {item.linkUrl && (
                                <BoardAsgmtLinkWrapper
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        window.open(item.linkUrl, "_blank");
                                    }}
                                >
                                    <HiOutlineLink size={16} color="#0075FF" />
                                    <BoardAsgmtLinkText>{item.linkName}</BoardAsgmtLinkText>
                                </BoardAsgmtLinkWrapper>
                           )}
                        </BoardAsgmtItem>
                    )}
                </React.Fragment>
            ))}

            {(props.owner && props.isStudying) && (
                <BoardAddButton onClick={() => navigate(`/${LinkEnum.STUDY}/${props.studyCode}/${LinkEnum.GENERATE}`)}>
                    <FiPlus size={35} color="white" />
                </BoardAddButton>
            )}

            <CommonConfirmModal
                open={controller.deleteNoticeOpen}
                setOpen={controller.setDeleteNoticeOpen}
                title="공지를 삭제하시겠습니까?"
                content="삭제할 공지와 관련된 정보는 복구할 수 없습니다."
                onOk={controller.onDeleteNotice}
            />
        </BoardList>
    )
}