import styled from "styled-components";
import { Swiper } from "swiper/react";

/**
 * @brief 스터디 스타일
 */

export const StudyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5625rem;
`;

// 현재 진행중인 스터디
export const StudyingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const StudyingTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.5rem;
    color: white;
`;

export const StudyingInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.375rem;
`;

export const StudyingSwiper = styled(Swiper)`
    width: 100%;

    .swiper-slide {
        opacity: 0.7;
        transition: 0.3s;
    }

    .swiper-slide-active {
        opacity: 1;
    }
`;

export const StudyingItem = styled.div`
    width: 100%;
    min-width: 18.3125rem;
    height: 9.5625rem;
`;

export const StudyingNoData = styled.div`
    width: 100%;
    height: 9.5625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.9375rem;
    background-color: rgba(37, 40, 49, 0.88);

    font-size: 1rem;
    color: white;
    text-align: center;
`;

// 오늘의 명언
export const StudyTodayPhraseContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    border-radius: 0.3125rem;
    padding: 0.5625rem;
    background-color: var(--second-primary);
    white-space: nowrap;
`;

export const StudyTodayPhraseWrapper = styled.div`
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 376px) {
        overflow: hidden;

        div.quote:last-child {
            padding-left: 5rem;
        }
    }
`;

export const StudyTodayPhraseTitle = styled.p`
    font-size: 0.875rem;
    color: var(--primary);
`;

export const StudyTodayPhraseContent = styled.p`
    font-size: 0.875rem;
    color: white;
`;

export const StudyTodayPhraseLine = styled.div`
    width: 2px;
    height: 0.6875rem;
    background-color: var(--primary);
`;

// 요즘 뜨고있는
export const StudyPopularContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`;

export const StudyPopularTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.3125rem;
`;

export const StudyPopularTitle = styled.p`
    font-family: "Pretendard-SemiBold" !important;
    font-size: 1rem;
    color: white;
`;

export const StudyPopularNoData = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: rem;
    color: var(--white-50);
    text-align: center;
`;