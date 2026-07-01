import { format } from "date-fns";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BASE_URL } from "@/util/api";
import { CommonOverflowMenu } from "@/components/common/overflow-menu";
import { IAsgmtCommentItem } from "../../index.type";
import { CommentContainer, CommentProfile, CommentWrapper, CommentContent, CommentContentText, CommentInfo, CommentInfoName, CommentInfoDate, CommentImage, CommentImageList } from "./indexStyles";
import { useControlComment } from "./index.control";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { ImgView } from "../img-view";

/**
 * @breif 과제 댓글
 */

interface Props {
    data: IAsgmtCommentItem;
}

export const Comment = (props: Props) => {
    const controller = useControlComment();

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
                            <CommentContentText className="success">체크 완료</CommentContentText>
                            
                            {props.data.isWriter && (
                                <div className="relative cursor-pointer" onClick={() => controller.setOverflowMenuOpen(true)}>
                                    <HiOutlineDotsVertical size={16} color="white" />

                                    <CommonOverflowMenu
                                        open={controller.overflowMenuOpen}
                                        setOpen={controller.setOverflowMenuOpen}
                                        options={[
                                            { text: "수정하기", textColor: "white", onClick: () => {} },
                                            { text: "삭제하기", textColor: "var(--red)", onClick: () => controller.setDeleteAsgmtCmtOpen(true) },
                                        ]}
                                        className="small"
                                    />
                                </div>
                            )}
                        </div>
                    </CommentInfo>

                    <CommentContentText>{props.data.comment}</CommentContentText>
                </CommentContent>

                <CommentImageList>
                    {props.data.imgList.map((img, index) => (
                        <CommentImage
                            key={index}
                            $src={`${BASE_URL}${img}`}
                            onClick={() => {
                                controller.setImgViewStartIndex(index);
                                controller.setImgViewOpen(true);
                            }}
                        />
                    ))}
                </CommentImageList>
            </CommentWrapper>

            <CommonConfirmModal
                open={controller.deleteAsgmtCmtOpen}
                setOpen={controller.setDeleteAsgmtCmtOpen}
                title="댓글을 삭제하시겠습니까?"
                content="삭제할 댓글과 관련된 정보는 복구할 수 없습니다."
                onOk={() => controller.onDeleteAsgmtCmt(props.data.code)}
            />

            <ImgView
                open={controller.imgViewOpen}
                setOpen={controller.setImgViewOpen}
                startIndex={controller.imgViewStartIndex}
                imgUrlList={props.data.imgList}
            />
        </CommentContainer>
    )
}