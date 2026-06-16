import styled from "styled-components";

/**
 * @brief 푸터 컴포넌트 스타일
 */

export const MenuContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    height: 4.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 1.875rem 1.875rem 0 0;
    padding: 0.4375rem 2.5rem;
    background-color: var(--second-primary);
    z-index: 10;
`;

export const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 1.9375rem;
`;

export const MenuInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    column-gap: 3.125rem;

    @media (max-width: 376px) {
        justify-content: space-between;
        column-gap: 1rem;
    }
`;

export const MenuPlusButton = styled.button`
    width: 3.1875rem;
    height: 3.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--primary);
    flex-shrink: 0;
`;