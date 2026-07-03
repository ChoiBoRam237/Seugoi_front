import styled from "styled-components";

/**
 * @brief 과제 보기 스타일
 */

export const BoardList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const BoardPre = styled.pre`
    font-size: 0.875rem;
    color: white;
`;

// 공지
export const BoardNoticeItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
    border-radius: 0.625rem;
    padding: 1rem;
    background-color: var(--second-primary);
`;

export const BoardNoticeTitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoardNoticeTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const BoardNoticeTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1rem;
    color: white;
`;

export const BoardNoticeLine = styled.hr`
    width: 100%;
    height: 1px;
    border-color: #656D86;
`;

// 과제
export const BoardAsgmtItem = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
    border-radius: 0.625rem;
    padding: 1rem;
    background-color: var(--second-primary);
    cursor: pointer;
`;

export const BoardAsgmtInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const BoardAsgmtInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BoardAsgmtInfoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const BoardAsgmtInfoText = styled.p`
    font-size: 0.75rem;
    color: var(--primary);

    &.dark { color: var(--gray-dark); }
    &.error { color: var(--red); }
`;

export const BoardAsgmtTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1rem;
    color: white;
`;

export const BoardAsgmtImageList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    column-gap: 0.6875rem;

    @media (max-width: 767px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 376px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 0.375rem;
    }
`;

export const BoardAsgmtImageWrapper = styled.div`
    position: relative;
    border-radius: 0.625rem;
    overflow: hidden;

    @media (max-width: 767px) and (min-width: 377px) {
        &:not(:nth-child(4)) > .count {
            display: none;
        }
    }

    @media (max-width: 376px) {
        &:not(:nth-child(3)) > .count {
            display: none;
        }
    }
`;

export const BoardAsgmtImage = styled.div<{ $src: string }>`
    position: relative;
    width: 100%;
    height: 6.125rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const BoardAsgmtImageCount = styled.div`
    display: none;

    @media (max-width: 767px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;

        font-family: "Pretendard-Medium" !important;
        font-size: 1.25rem;
        color: white;
    }
`;

export const BoardAsgmtLinkWrapper = styled.button`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const BoardAsgmtLinkText = styled.p`
    font-size: 0.875rem;
    color: #0075FF;
`;

// 추가 버튼
export const BoardAddButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2.0625rem;
    width: 3.1875rem;
    height: 3.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--primary);
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.6);
`;