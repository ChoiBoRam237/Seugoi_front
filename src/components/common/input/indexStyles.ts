import styled from "styled-components";

/**
 * @brief input 공통 컴포넌트 스타일
 */

export const Input = styled.input`
    width: 100%;
    height: auto;
    border: 1px solid var(--third-primary);
    border-radius: 0.625rem;
    padding: 0.75rem;
    outline: none;
    background-color: transparent;

    font-family: 'Pretendard-Medium' !important;
    font-size: 1rem;
    color: white;

    &::placeholder {
        color: var(--third-primary);
    }

    &.small {
        padding: 0.625rem 0.75rem;
    }
`;