import { CommonStudyIntro } from "@/components/common/study-intro";
import { CommonButton } from "@/components/molecules/button";
import { IStudyDetail } from "@/components/types/study";
import { IUser } from "@/components/types/user";
import { useControlStudy } from "./index.control";

/**
 * @brief 스터디 소개
 */

interface StudyProps {
    studyCode: number;
    adminData: IUser;
    studyData: IStudyDetail;
    isAdmin: boolean;
}

export const Study = (props: StudyProps) => {
    const controller = useControlStudy({ studyCode: props.studyCode });

    return (
        <>
            <CommonStudyIntro
                readOnly={true}
                studyTitle={props.studyData.studyTitle ?? " "}
                peopleCount={props.studyData.peopleCount}
                joinCount={props.studyData.joinCount ?? 0}
                summary={props.studyData.summary ?? " "}
                introduction={props.studyData.introduction}
                description={props.studyData.description ?? " "}
                recommend={props.studyData.recommend}

                profileImgUrl={props.adminData.profileImageUrl}
                userName={props.adminData.nickname}
            />
            
            {(!props.isAdmin && !props.studyData.isJoined) && (
                <CommonButton
                    loading={controller.isJoinLoading}
                    bgColor="var(--primary)"
                    text="스터디 가입하기"
                    onClick={controller.handleStudyJoin}
                />
            )}
        </>
    )
}