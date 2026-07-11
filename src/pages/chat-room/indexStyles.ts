import styled from "styled-components";

/**
 * @brief 채팅방 스타일
 */

export const ChatRoomList = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.25rem;
    background-color: #1B1D24;
    padding: 1.5rem;
    padding-bottom: calc(4.875rem + 2rem);
`;

export const ChatRoomNoData = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4.875rem;

    font-family: "Pretendard-SemiBold" !important;
    font-size: 1.125rem;
    color: var(--white-80);
    text-align: center;
`;

export const ChatRoomMyChat = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ChatRoomYourChat = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

export const ChatRoomDateWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
`;

export const ChatRoomHr = styled.hr`
    width: 100%;
    border-color: var(--white-80);
`;

export const ChatRoomDate = styled.p`
    font-size: 0.875rem;
    color: var(--white-80);
    white-space: nowrap;
`;

export const ChatRoomStatus = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.625rem;
    background-color: #454545;

    font-size: 0.75rem;
    color: white;
`;

// 공통 스타일
export const CommonChatContainer = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 0.5rem;

    &.my.hiddenProfile {
        margin-top: -0.75rem;
        padding-right: calc(2.3125rem + 0.5rem);
    }

    &.your.hiddenProfile {
        margin-top: -0.75rem;
        padding-left: calc(2.3125rem + 0.5rem);
    }
`;

export const CommonChatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.375rem;

    &.my { align-items: flex-end; }
    &.your { align-items: flex-start; }
`;

export const CommonChatProfile = styled.div<{ $src: string }>`
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CommonChatEmptyProfile = styled.div`
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;
    background-color: gray;
`;

export const CommonChatNameWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const CommonChatName = styled.p`
    font-family: "Pretendard-SemiBold" !important;
    font-size: 1rem;
    color: white;
`;

export const CommonChatBubbleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    column-gap: 0.375rem;
`;

export const CommonChatTime = styled.p`
    font-size: 0.875rem;
    color: var(--white-50);
`;

export const CommonChatBubbleInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 0.625rem;
`;

export const CommonChatBubble = styled.pre`
    width: auto;
    max-width: 30rem;
    height: auto;
    max-height: 15rem;
    padding: 0.5rem 1rem;
    overflow-y: auto;
    
    font-family: "Pretendard-Medium" !important;
    font-size: 1rem;
    color: black;

    &.my {
        border-radius: 1.25rem 0 1.25rem 1.25rem;
        background-color: var(--primary);
    }

    &.your {
        border-radius: 0 1.25rem 1.25rem 1.25rem;
        background-color: white;
    }

    @media (max-width: 767px) {
        max-width: 14rem;
    }

    @media (max-width: 376px) {
        max-width: 13rem;
    }
`;

export const CommonChatImgWrapper = styled.div`
    width: auto;
    max-width: 26.5rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    &.my { justify-content: flex-end; }
    &.your { justify-content: flex-start; }

    @media (max-width: 767px) {
        max-width: 14rem;
    }

    @media (max-width: 376px) {
        max-width: 13rem;
    }
`;

export const CommonChatImg = styled.div<{ $src: string }>`
    width: 6.25rem;
    height: 6.25rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;