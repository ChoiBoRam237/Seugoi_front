import styled from "styled-components";

/**
 * @brief 커스텀 헤더 컴포넌트 스타일
 */

export const CustomHeaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 0.9375rem;
`;

export const CustomHeaderInputWrapper = styled.div`
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    column-gap: 0.9375rem;
    border: 1px solid var(--white-50);
    border-radius: 0.625rem;
    padding: 0.6875rem 0.875rem;
`;

export const CustomHeaderInput = styled.input`
    width: 100%;
    height: 100%;

    font-size: 1rem;
    line-height: 1.375rem;
    color: white;
`;