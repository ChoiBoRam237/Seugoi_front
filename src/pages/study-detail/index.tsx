import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { DetailContainer, DetailSelection, DetailSelectWrapper, DetailWrapper } from "./indexStyles";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { useControlStudyDetail } from "./index.control";
import { CommonLoading } from "@/components/loading";
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

    return (
        <LayoutInnerWrapper className="arrow">
            <DetailContainer>
                {!controller.isLoading 
                && controller.studyData !== null 
                && controller.adminData !== null ? (
                    <>
                        <CommonArrowHeader moveUrl={location?.state?.prevUrl ?? `/${LinkEnum.HOME}`} />

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
                    </>
                ) : (
                    <CommonLoading />
                )}
            </DetailContainer>
        </LayoutInnerWrapper>
    )
}