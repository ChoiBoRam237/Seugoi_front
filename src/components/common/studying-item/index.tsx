import { IStudy } from "@/components/types/study";
import { BASE_URL } from "@/util/api";
import { StudyingBgImage, StudyingContainer, StudyingContent, StudyingGradient, StudyingProgress, StudyingText, StudyingTitle } from "./indexStyles";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 현재 진행중인 스터디 컴포넌트
 */

interface Props {
    item: IStudy;
    prevUrl: string;
}

export const CommonStudyingItem = (props: Props) => {
    const navigate = useNavigate();

    return (
        <StudyingContainer
            onClick={() => {
                navigate(`/${LinkEnum.STUDY}/${props.item.code}`, {
                    state: { prevUrl: props.prevUrl }
                });
            }}
        >
            <StudyingBgImage $src={`${BASE_URL}${props.item.bgImg.folderName}${props.item.bgImg.imgUrl}`} />
            <StudyingGradient />

            <StudyingContent>
                <StudyingTitle>{props.item.studyName}</StudyingTitle>
                <div className="flex items-center gap-1">
                    {props.item.dDay !== null && <StudyingText>{`D-${props.item.dDay}`}</StudyingText>}
                    <StudyingText>현재 진행상황</StudyingText>
                </div>
                <StudyingProgress
                    type="line"
                    percent={props.item.progress}
                    showInfo={false}
                    railColor="white"
                    strokeColor="var(--primary)"
                />
            </StudyingContent>
        </StudyingContainer>
    )
}