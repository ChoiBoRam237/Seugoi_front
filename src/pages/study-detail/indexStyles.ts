import styled from "styled-components";

/**
 * @brief 스터디 상세페이지 스타일
 */

export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    row-gap: 1.375rem;
    padding-top: 4.6875rem;
    padding-bottom: 1.5rem;
`;

export const DetailWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2rem;
    padding: 0 1.5rem;
`;

export const DetailSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.625rem;
    padding: 0 1.5625rem;
`;

export const DetailSelection = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 0.625rem;
    padding: 0.625rem 0.875rem;

    font-family: 'Pretendard-Medium' !important;
    font-size: 1rem;
    color: white;

    &.active {
        border: none;
        background-color: white;
        color: var(--background);
    }
`;