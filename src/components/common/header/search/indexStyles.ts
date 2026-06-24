import styled from "styled-components";

/**
 * @brief 검색 헤더 컴포넌트 스타일
 */

export const SearchHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    height: 4.6875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.9375rem;
    padding: 1.5rem;
    background-color: var(--background);
    z-index: 10;
`;

export const SearchHeaderInputWrapper = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    column-gap: 0.9375rem;
    border: 1px solid var(--white-50);
    border-radius: 0.625rem;
    padding: 0.6875rem 0.875rem;
`;

export const SearchHeaderInput = styled.input`
    width: 100%;
    height: 100%;

    font-size: 1rem;
    line-height: 1.375rem;
    color: white;
`;