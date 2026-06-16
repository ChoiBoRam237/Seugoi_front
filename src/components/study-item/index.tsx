import { StudyContainer, StudyContent, StudyGradient, StudyImg, StudyText, StudyTitle } from "./indexStyles";

/**
 * @brief 스터디 아이템 컴포넌트
 */

export const StudyItem = () => {
    return (
        <StudyContainer>
            <StudyImg $src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MTRfMjMy%2FMDAxNzUyNDgwMjM1NjEx.4UF6UsB4eZtIUbIsX_IYnYoGrb4zuUhOPP_zwMbpU0og.I7RjTy0H2GlpQJbpF02MLqKQR68ureavhaT8Xf2gX9gg.JPEG%2F%25B8%25C5%25C7%25E2_AI%25C0%25CC%25B9%25CC%25C1%25F6_%252812%2529.jpg&type=sc960_832" />
            <StudyGradient />
            <StudyContent>
                <StudyTitle>스터디 제목</StudyTitle>
                <StudyText>#해시태그 #뭐뭐뭐</StudyText>
            </StudyContent>
        </StudyContainer>
    )
}