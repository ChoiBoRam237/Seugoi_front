import styled from "styled-components";

/**
 * @brief input 컴포넌트 스타일
 */

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const InputLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const InputLabel = styled.p`
    font-size: 1rem;
    color: white;
`;

export const InputInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: auto;
    border: 1px solid var(--third-primary);
    border-radius: 0.625rem;
    padding: 0.75rem;

    font-size: 1rem;
    color: white;

    &::placeholder {
        color: var(--third-primary);
    }

    &.small {
        padding: 0.625rem 0.75rem;
    }
`;