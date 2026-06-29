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

/**
 * @brief 스터디 상세페이지
 */

export const StudyDetail = () => {
    const location = useLocation();
    const controller = useControlStudyDetail();

    const adminOptions = [ // 관리자 옵션
        { text: "수정하기", textColor: "white", onClick: () => {} },
        { text: "삭제하기", textColor: "#DD5252", onClick: () => {} },
    ];

    const userOptions = [ // 사용자 옵션
        { text: "탈퇴하기", textColor: "#DD5252", onClick: () => {} },
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
                                    studyCode={controller.studyData.code}
                                    studyData={controller.studyData}
                                    adminData={controller.adminData}
                                    isAdmin={controller.isAdmin}
                                />
                            ) : (
                                <></>
                            )}
                        </DetailWrapper>
                    </DetailContainer>
                </LayoutInnerWrapper>
            ) : (
                <CommonLoading />
            )}
        </>
    )
}