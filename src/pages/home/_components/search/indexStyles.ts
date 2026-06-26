import styled from "styled-components";

/**
 * @brief 스터디 검색 스타일
 */

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.375rem;
    margin-top: 1rem;

    &.isKeyword {
        row-gap: 1.375rem;
    }
`;

// 최근 검색어 / 최근 조회한 스터디
export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
`;

export const SearchLatestLabelWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchLatestTitle = styled.p`
    font-size: 1rem;
    color: white;
`;

export const SearchLatestLabel = styled.button`
    font-size: 0.75rem;
    color: var(--white-50);
`;

export const SearchLatestList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    overflow-x: auto;

    &.keyword { column-gap: 0.375rem; }
    &.study { column-gap: 0.9375rem; }

    &::-webkit-scrollbar {
        display: none;
    }
`;

// 최근 검색어
export const LatestSearch = styled.button`
    width: auto;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
    border: 1px solid white;
    border-radius: 3.125rem;
    padding: 0.625rem 0.75rem;
    padding-right: 0.5rem;

    font-size: 0.875rem;
    line-height: 0.5625rem;
    color: white;
`;

// 최근 조회한 스터디
export const LatestStudy = styled.div`
    width: 10.125rem;
    height: 100%;
`;

// 검색된 스터디
export const StudyTitle = styled.p`
    font-family: "Pretendard-ExtraBold" !important;
    font-size: 1.5rem;
    color: white;
`;

export const NoData = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1.25rem;
    color: var(--white-50);
    text-align: center;
`;