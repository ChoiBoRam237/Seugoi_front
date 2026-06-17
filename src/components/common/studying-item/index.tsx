import { StudyingBgImage, StudyingContainer, StudyingContent, StudyingGradient, StudyingProgress, StudyingText, StudyingTitle } from "./indexStyles";

/**
 * @brief 현재 진행중인 스터디 컴포넌트
 */

export const StudyingItem = () => {
    return (
        <StudyingContainer>
            <StudyingBgImage $src="" />
            <StudyingGradient />

            <StudyingContent>
                <StudyingTitle>스터디 제목</StudyingTitle>
                <StudyingText>D-173 현재 진행상황</StudyingText>
                <StudyingProgress
                    type="line"
                    percent={50}
                    showInfo={false}
                    railColor="white"
                    strokeColor="var(--primary)"
                />
            </StudyingContent>
        </StudyingContainer>
    )
}