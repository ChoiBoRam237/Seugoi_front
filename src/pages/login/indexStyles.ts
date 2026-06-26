import styled from "styled-components";

/**
 * @brief 로그인 스타일
 */

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;

export const LoginWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 4.875rem;
`;

export const LoginTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.9375rem;
`;

export const LoginTitle = styled.p`
    font-size: 1rem;
    color: white;
    opacity: 0.8;
`; 

export const LoginLogo = styled.div<{ $src: string }>`
    width: 10.625rem;
    height: 3.5625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const LoginInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.875rem;
`;

export const LoginCharacter = styled.div<{ $src: string }>`
    width: 12.5625rem;
    height: 19.5625rem;
    flex-shrink: 0;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const LoginPersonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.6875rem;
`;

export const LoginPerson = styled.div<{ $src: string }>`
    width: 6.3125rem;
    height: 12.8125rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const LoginButton = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.6875rem;
    padding: 0.9375rem;
    border-radius: 0.625rem;
    background-color: var(--yellow);
    margin-top: -1.9375rem;

    font-size: 1rem;
    color: black;

    &:hover,
    &:active {
        background-color: var(--yellow-hover);
    }
`;