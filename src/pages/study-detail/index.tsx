import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { DetailContainer, DetailSelection, DetailSelectWrapper, DetailWrapper } from "./indexStyles";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { CommonButton } from "@/components/molecules/button";
import { CommonStudyIntro } from "@/components/common/study-intro";
import { useControlStudyDetail } from "./index.control";
import { Loading } from "@/components/loading";
import { BASE_URL } from "@/util/api";

/**
 * @brief 스터디 상세페이지
 */

export const StudyDetail = () => {
    const controller = useControlStudyDetail();

    return (
        <DetailContainer>
            {!controller.isLoading 
            && controller.studyData !== null 
            && controller.adminData !== null ? (
                <>
                    <CommonArrowHeader moveUrl={`/${LinkEnum.HOME}`} />

                    <CommonStudyInfoAndImage
                        bgImage={`${BASE_URL}${controller.studyData.bgImageUrl}`}
                        studyName={controller.studyData.studyName}
                        categories={controller.studyData.categories}
                        dDay={controller.studyData.dDay}
                    />

                    {(controller.isAdmin || controller.studyData.isJoined) && (
                        <DetailSelectWrapper>
                            <DetailSelection
                                className={controller.status === "homework" ? "active" : ""}
                                onClick={() => controller.setStatus("homework")}
                            >
                                과제 하기
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
                        <CommonStudyIntro
                            readOnly={true}
                            studyTitle={controller.studyData.studyTitle ?? " "}
                            peopleCount={controller.studyData.peopleCount}
                            joinCount={controller.studyData.joinCount ?? 0}
                            summary={controller.studyData.summary ?? " "}
                            introduction={controller.studyData.introduction}
                            description={controller.studyData.description ?? " "}
                            recommend={controller.studyData.recommend}

                            profileImgUrl={controller.adminData.profileImageUrl}
                            userName={controller.adminData.nickname}
                        />
                        
                        {(!controller.isAdmin && !controller.studyData.isJoined) && (
                            <CommonButton
                                loading={controller.isJoinLoading}
                                bgColor="var(--primary)"
                                text="스터디 가입하기"
                                onClick={controller.handleStudyJoin}
                            />
                        )}
                    </DetailWrapper>
                </>
            ) : (
                <Loading />
            )}
        </DetailContainer>
    )
}