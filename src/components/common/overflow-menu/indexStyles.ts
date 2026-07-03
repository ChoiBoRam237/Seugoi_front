import styled from "styled-components";

/**
 * @brief overflow menu 스타일
 */

export const MenuContainer = styled.div`
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    width: 11.875rem;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    padding: 0.25rem;
    border-radius: 0.625rem;
    background-color: #1B1D24;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.75);
    z-index: 1;

    &.small { width: 8.0625rem; }
`;

export const MenuItem = styled.button<{ $color: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.6875rem 1.25rem;
    
    &:hover,
    &:active { background-color: #272A34; }

    font-family: "Pretendard-Medium";
    font-size: 1rem;
    color: ${({ $color }) => $color};

    &.small {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
    }
`;