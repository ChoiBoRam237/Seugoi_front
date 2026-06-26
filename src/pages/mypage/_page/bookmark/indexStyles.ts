import styled from "styled-components";

/**
 * @brief 찜한 스터디 스타일
 */

export const BookmarkHeader = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    padding: 1.875rem 1.5rem 1.25rem;
    z-index: 10;
`;

export const BookmarkTitleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export const BookmarkTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const BookmarkTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.5rem;
    color: white;
`;

// 정렬
export const BookmarkSort = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const BookmarkStudyContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    padding-top: 8rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;

// 스터디 리스트
export const BookmarkStudyList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & > * {
        width: calc((100% - 3rem) / 4) !important;
    }

    @media (max-width: 767px) {
        & > * {
            width: calc((100% - 1rem) / 2) !important;
        }
    }
`;

// 데이터 없을 때
export const NoData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Pretendard-Medium" !important;
    font-size: 1.25rem;
    color: var(--white-50);
    text-align: center;
`;