import styled from "styled-components";
import { Swiper } from "swiper/react";

/**
 * @brief 메인화면 스타일
 */

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5625rem;
    padding: 0 1.5rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;

export const HomeLogo = styled.div<{ $src: string }>`
    width: 6.9375rem;
    height: 2.3125rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

// 현재 진행중인 스터디
export const HomeStudyingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const HomeStudyingTitle = styled.p`
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.5rem;
    color: white;
`;

export const HomeStudyingInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.375rem;
`;

export const HomeStudyingSwiper = styled(Swiper)`
    width: 100%;

    .swiper-slide {
        opacity: 0.7;
        transition: 0.3s;
    }

    .swiper-slide-active {
        opacity: 1;
    }
`;

export const HomeStudyingItem = styled.div`
    width: 100%;
    min-width: 18.3125rem;
    height: 9.5625rem;
`;

export const HomeTodayPhrase = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    border-radius: 0.3125rem;
    padding: 0.5625rem;
    background-color: var(--second-primary);
`;

export const HomeTodayPhraseTitle = styled.p`
    font-size: 0.875rem;
    color: var(--primary);
`;

export const HomeTodayPhraseContent = styled.p`
    font-size: 0.875rem;
    color: white;
`;

export const HomeTodayPhraseLine = styled.div`
    width: 1.5px;
    height: 0.6875rem;
    background-color: var(--primary);
`;

// 요즘 뜨고있는
export const HomePopularContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`;

export const HomePopularWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HomePopularTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.3125rem;
`;

export const HomePopularTitle = styled.p`
    font-family: 'Pretendard-SemiBold' !important;
    font-size: 1rem;
    color: white;
`;

export const HomePopularList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.9375rem;

    & > * {
        width: calc((100% - 2.8125rem) / 4) !important;
    }

    @media (max-width: 767px) {
        & > * {
            width: calc((100% - 0.9375rem) / 2) !important;
        }
    }
`;