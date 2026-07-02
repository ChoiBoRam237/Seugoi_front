import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "@/util/api";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { CommonLoading } from "@/components/common/loading";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { Study } from "./_components/study";
import { Board } from "./_components/board";
import { useControlStudyDetail } from "./index.control";
import { DetailContainer, DetailSelection, DetailSelectWrapper, DetailWrapper } from "./indexStyles";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 스터디 상세페이지
 */

export const StudyDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const controller = useControlStudyDetail();

    const adminOptions = [ // 관리자 옵션
        { text: "수정하기", textColor: "white", onClick: () => navigate(`${LinkEnum.UPDATE}`) },
        { text: "삭제하기", textColor: "var(--red)", onClick: () => controller.setDeleteStudyOpen(true) },
    ];

    const userOptions = [ // 사용자 옵션
        { text: "탈퇴하기", textColor: "var(--red)", onClick: () => controller.setExitStudyOpen(true) },
    ];

    return (
        <>
            {!controller.isLoading 
            && controller.studyData !== null 
            && controller.adminData !== null ? (
                <LayoutInnerWrapper className="arrow">
                    <DetailContainer>
                        <CommonArrowHeader
                            moveUrl={location?.state?.prevUrl ?? `/${LinkEnum.HOME}`}
                            options={controller.isAdmin ? adminOptions : controller.studyData.isJoined ? userOptions : []}
                        />

                        <CommonStudyInfoAndImage
                            bgImage={`${BASE_URL}${controller.studyData.bgImageUrl.imgUrl}`}
                            studyName={controller.studyData.studyName}
                            categories={controller.studyData.categories}
                            dDay={controller.studyData.dDay}
                        />

                        {(controller.isAdmin || controller.studyData.isJoined) && (
                            <DetailSelectWrapper>
                                <DetailSelection
                                    className={controller.status === "assignment" ? "active" : ""}
                                    onClick={() => controller.setStatus("assignment")}
                                >
                                    과제 보기
                                </DetailSelection>

                                <DetailSelection 
                                    className={controller.status === "introduction" ? "active" : ""}
                                    onClick={() => controller.setStatus("introduction")}
                                >
                                    스터디 소개
                                </DetailSelection>
                            </DetailSelectWrapper>
                        )}

                        <DetailWrapper>
                            {controller.status === "introduction" ? (
                                <Study
                                    studyCode={controller.studyCode}
                                    studyData={controller.studyData}
                                    adminData={controller.adminData}
                                    isAdmin={controller.isAdmin}
                                />
                            ) : (
                                <Board
                                    studyCode={controller.studyCode}
                                    isAdmin={controller.isAdmin}
                                />
                            )}
                        </DetailWrapper>
                    </DetailContainer>
                </LayoutInnerWrapper>
            ) : (
                <CommonLoading />
            )}

            <CommonConfirmModal
                open={controller.deleteStudyOpen}
                setOpen={controller.setDeleteStudyOpen}
                title="스터디를 삭제하시겠습니까?"
                content="삭제할 스터디와 관련된 모든 정보는 복구할 수 없습니다."
                onOk={controller.onDeleteStudy}
            />

            <CommonConfirmModal
                open={controller.exitStudyOpen}
                setOpen={controller.setExitStudyOpen}
                title="이 스터디를 탈퇴하시겠습니까?"
                content="업로드한 과제 댓글 포함 모든 정보는 복구할 수 없습니다."
                onOk={() => {}}
            />
        </>
    )
}