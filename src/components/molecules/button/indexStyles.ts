import styled from "styled-components";

/**
 * @brief button 컴포넌트 스타일
 */

export const Button = styled.button<{ $bgColor: string }>`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.625rem;
    background-color: ${({ $bgColor }) => $bgColor};

    font-size: 1rem;
    color: white;

    &:disabled {
        background-color: var(--disabled);
    }
`;