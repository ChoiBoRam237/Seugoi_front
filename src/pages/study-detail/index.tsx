import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { DetailContainer, DetailSelection, DetailSelectWrapper, DetailWrapper } from "./indexStyles";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { useControlStudyDetail } from "./index.control";
import { CommonLoading } from "@/components/common/loading";
import { BASE_URL } from "@/util/api";
import { LayoutInnerWrapper } from "@/components/layout";
import { useLocation } from "react-router-dom";
import { Study } from "./_components/study";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { Board } from "./_components/board";

/**
 * @brief 스터디 상세페이지
 */

export const StudyDetail = () => {
    const location = useLocation();
    const controller = useControlStudyDetail();

    const adminOptions = [ // 관리자 옵션
        { text: "수정하기", textColor: "white", onClick: () => {} },
        { text: "삭제하기", textColor: "#DD5252", onClick: () => controller.setDeleteStudyOpen(true) },
    ];

    const userOptions = [ // 사용자 옵션
        { text: "탈퇴하기", textColor: "#DD5252", onClick: () => controller.setExitStudyOpen(true) },
    ];

    return (
        <>
            {!controller.isLoading 
            && controller.studyData !== null 
            && controller.adminData !== null ? (
                <LayoutInnerWrapper className="arrow">
                    <DetailContainer>
                        <CommonArrowHeader
                            moveUrl={location?.state?.prevUrl ?? location.pathname}
                            options={controller.isAdmin ? adminOptions : controller.studyData.isJoined ? userOptions : []}
                        />

                        <CommonStudyInfoAndImage
                            bgImage={`${BASE_URL}${controller.studyData.bgImageUrl}`}
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

            {controller.deleteStudyOpen && (
                <CommonConfirmModal
                    open={controller.deleteStudyOpen}
                    setOpen={controller.setDeleteStudyOpen}
                    title="과제를 삭제하시겠습니까?"
                    content="삭제된 과제와 관련된 모든 정보는 복구할 수 없습니다."
                    onOk={controller.onDeleteStudy}
                />
            )}

            {controller.exitStudyOpen && (
                <CommonConfirmModal
                    open={controller.exitStudyOpen}
                    setOpen={controller.setExitStudyOpen}
                    title="이 스터디를 탈퇴하시겠습니까?"
                    content="업로드한 과제 댓글 포함 모든 정보는 복구할 수 없습니다."
                    onOk={() => {}}
                />
            )}
        </>
    )
}