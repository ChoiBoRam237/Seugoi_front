import styled from "styled-components";

/**
 * @brief 헤더 공통 스타일
 */

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-color: var(--background);
    z-index: 10;

    &.custom { height: 6.0625rem; }
    &.arrow,
    &.chat { height: 4.6875rem; }
`;

export const HeaderLogo = styled.div<{ $src: string }>`
    width: 6.9375rem;
    height: 2.3125rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;