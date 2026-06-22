import styled from "styled-components";

/**
 * @brief 스터디 목록 스타일
 */

export const ListContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    padding: 1.875rem 1.5625rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;

export const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const ListTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export const ListTitle = styled.p`
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.5rem;
    color: white;
`;

export const ListFilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
`;

export const ListFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

export const ListFilter = styled.button`
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.125rem;
    color: var(--white-50);

    &.active {
        color: white;
    }
`;

export const ListSortContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ListWrap = styled.div`
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

export const ListNoData = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.125rem;
    color: var(--white-50);
`;