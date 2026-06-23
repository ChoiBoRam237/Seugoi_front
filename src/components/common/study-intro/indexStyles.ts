import styled from "styled-components";

/**
 * @brief 스터디 정보 입력 및 읽기전용 컴포넌트 스타일
 */

export const IntroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`;

// 스터디 제목
export const IntroStudyTitle = styled.textarea`
    width: 100%;
    height: 2.25rem;
    resize: none;
    overflow: hidden;

    font-family: 'Pretendard-Bold' !important;
    font-size: 1.5rem;
    color: white;

    &::placeholder {
        color: var(--white-50);
    }
`;

export const IntroStudyTitlePre = styled.pre`
    width: 100%;
    height: auto;
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.5rem;
    color: white;
`;

// 모집 인원
export const IntroPeopleCount = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const IntroPeopleCountText = styled.p`
    font-size: 0.875rem;
    color: var(--white-50);
`;

// 프로필
export const IntroProfile = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export const IntroProfileImg = styled.div<{ $src: string }>`
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const IntroProfileText = styled.p`
    font-family: 'Pretendard-SemiBold' !important;
    font-size: 1rem;
    color: white;
`;

// 글
export const IntroContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.875rem;
`;

export const IntroContentTextarea = styled.textarea`
    width: 100%;
    height: 1.3125rem;
    resize: none;
    overflow: hidden;

    font-size: 0.875rem;
    color: var(--white-80);
`;

export const IntroContentPre = styled.pre`
    width: 100%;
    height: auto;
    font-size: 0.875rem;
    color: var(--white-80);
`;

export const IntroContentInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
`;

export const IntroContentSubTitle = styled.p`
    font-family: 'Pretendard-SemiBold' !important;
    font-size: 1rem;
    color: white;
`;

export const IntroContentBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 0.625rem;
    padding: 1rem;
    padding-left: 0.875rem;
    border-radius: 0.625rem;
    background-color: var(--third-primary);
`;

export const IntroContentBoxInputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const IntroContentBoxInput = styled.input`
    width: 100%;
    font-size: 0.875rem;
    color: white;
`;