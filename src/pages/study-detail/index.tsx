import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { DetailContainer, DetailWrapper } from "./indexStyles";
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

    if (
        controller.isLoading 
        || controller.studyData === null 
        || controller.adminData === null
    ) return <Loading />;

    return (
        <DetailContainer>
            <CommonArrowHeader moveUrl={`/${LinkEnum.HOME}`} />

            <CommonStudyInfoAndImage
                bgImage={`${BASE_URL}${controller.studyData.bgImageUrl}`}
                studyName={controller.studyData.studyName}
                categories={controller.studyData.categories}
                dDay={controller.studyData.dDay}
            />

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
                
                <CommonButton
                    bgColor="var(--primary)"
                    text="스터디 가입하기"
                    onClick={() => {}}
                />
            </DetailWrapper>
        </DetailContainer>
    )
}