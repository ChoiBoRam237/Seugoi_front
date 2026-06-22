import { StudyContainer, StudyContent, StudyGradient, StudyImg, StudyText, StudyTitle } from "./indexStyles";

/**
 * @brief 스터디 아이템 컴포넌트
 */

interface StudyItemProps {
    bgImageUrl: string;
    studyName: string;
    categories: string[];
    isBookmark: boolean;
    onClick: () => void;
}

export const CommonStudyItem = (props: StudyItemProps) => {
    return (
        <StudyContainer>
            <StudyImg $src={props.bgImageUrl} />
            <StudyGradient />
            <StudyContent>
                <StudyTitle>{props.studyName}</StudyTitle>
                
                {props.categories.length > 0 && (
                    <StudyText>
                        {props.categories.map((category, _) => (
                            <>{category}</>
                        ))}
                    </StudyText>
                )}
            </StudyContent>
        </StudyContainer>
    )
}