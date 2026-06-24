import styled from "styled-components";

/**
 * @brief textarea 컴포넌트 스타일
 */

export const TextareaWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const TextareaLabel = styled.p`
    font-size: 1rem;
    color: white;
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 12.1875rem;
    border: 1px solid var(--gray-dark);
    border-radius: 0.625rem;
    padding: 0.75rem;

    font-size: 1rem;
    color: white;

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        height: 3rem;
        background-color: #4F4F4F;
        border-radius: 3.125rem;
        background-clip: padding-box;
        border: 0.375rem solid transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::placeholder {
        color: var(--gray-dark);
    }
`;