import React from "react";
import { TiPin } from "react-icons/ti";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { HiOutlineLink } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BoardNoticeLine, BoardList, BoardNoticeItem, BoardPre, BoardNoticeTitle, BoardNoticeTitleWrapper, BoardAsgmtItem, BoardAsgmtInfoWrapper, BoardAsgmtInfoText, BoardAsgmtInfoTextWrapper, BoardAsgmtImageList, BoardAsgmtImage, BoardAsgmtImageWrapper, BoardAsgmtImageCount, BoardAsgmtTitle, BoardAsgmtLinkWrapper, BoardAsgmtLinkText, BoardAsgmtInfoContainer, BoardNoticeTitleContainer } from "./indexStyles";
import { useControlBoard } from "./index.control";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { CommonOverflowMenu } from "@/components/common/overflow-menu";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";

/**
 * @brief 과제 보기
 */

interface Props {
    studyCode: number;
    isAdmin: boolean;
}

export const Board = (props: Props) => {
    const navigate = useNavigate();
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
                                                { text: "수정하기", textColor: "white", onClick: () => {} },
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
                
                                    <BoardAsgmtInfoTextWrapper>
                                        <FaRegCircleXmark size={17} color="#DD5252" />
                                        <BoardAsgmtInfoText className="error">미제출 과제</BoardAsgmtInfoText>
                                    </BoardAsgmtInfoTextWrapper>
                                </BoardAsgmtInfoWrapper>
                
                                <BoardAsgmtTitle>{item.title}</BoardAsgmtTitle>
                
                                <BoardPre>{item.content}</BoardPre>
                
                                {item.imageList.length > 0 && (
                                    <BoardAsgmtImageList>
                                        {item.imageList.slice(2).map((image, index) => (
                                            <BoardAsgmtImageWrapper key={index}>
                                                <BoardAsgmtImage $src={image} />
                                                {item.imageList.length > 3 && <BoardAsgmtImageCount>+ {(item.imageList.length - 3)}</BoardAsgmtImageCount>}
                                            </BoardAsgmtImageWrapper>
                                        ))}
                                    </BoardAsgmtImageList>
                                )}
                            </BoardAsgmtInfoContainer>
            
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
                        </BoardAsgmtItem>
                    )}
                </React.Fragment>
            ))}

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