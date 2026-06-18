import { StudyContainer, StudyContent, StudyGradient, StudyImg, StudyText, StudyTitle } from "./indexStyles";

/**
 * @brief 스터디 아이템 컴포넌트
 */

export const CommonStudyItem = () => {
    return (
        <StudyContainer>
            <StudyImg $src="" />
            <StudyGradient />
            <StudyContent>
                <StudyTitle>스터디 제목</StudyTitle>
                <StudyText>#해시태그 #뭐뭐뭐</StudyText>
            </StudyContent>
        </StudyContainer>
    )
}