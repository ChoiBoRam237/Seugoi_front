import styled from "styled-components";

/**
 * @brief 채팅방 헤더 컴포넌트 스타일
 */

export const ChatHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ChatHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
`;

export const ChatHeaderInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.125rem;
`;

export const ChatHeaderInfoImg = styled.div<{ $src: string }>`
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 0.625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const ChatHeaderInfoName = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.5rem;
    color: white;
`;