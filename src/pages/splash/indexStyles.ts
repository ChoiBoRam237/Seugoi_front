import styled from 'styled-components';

/**
 * @brief 스플레시 스타일
 */

export const SplashContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SplashLogo = styled.div<{ $src: string }>`
    width: 10.625rem;
    height: 3.5625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;