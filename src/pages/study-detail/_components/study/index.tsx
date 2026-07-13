import { CommonStudyIntro } from "@/components/common/study-intro";
import { CommonButton } from "@/components/molecules/button";
import { IStudyDetail, IStudyStatus } from "@/components/types/study";
import { IUser } from "@/components/types/user";
import { useControlStudy } from "./index.control";

/**
 * @brief 스터디 소개
 */

export interface StudyProps {
    studyCode: number;
    adminData: IUser;
    studyData: IStudyDetail;
    owner: boolean;
    onFetch: () => void;
}

export const Study = (props: StudyProps) => {
    const controller = useControlStudy(props);

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
                isStudying={props.studyData.status === IStudyStatus.STUDYING}

                profileImgUrl={props.adminData.profileImgUrl}
                userName={props.adminData.name}
            />
            
            {(!props.owner && !props.studyData.joined) && (
                <CommonButton
                    loading={controller.isJoinLoading}
                    bgColor="var(--primary)"
                    disabled={props.studyData.status === IStudyStatus.FINISHED}
                    text={
                        props.studyData.status === IStudyStatus.FINISHED
                        ? "종료된 스터디입니다"
                        : props.studyData.studyFull
                            ? "정원 마감"
                            : "스터디 가입하기"
                    }
                    onClick={controller.onStudyJoin}
                />
            )}
        </>
    )
}