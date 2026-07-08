import styled from "styled-components";

/**
 * @brief 채팅 목록 스타일
 */

export const ChatListTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.5rem;
    color: white;
`;

export const ChatListContainer = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 6.0625rem;
`;

export const ChatListWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    border-radius: 1.875rem 1.875rem 0 0;
    padding: 1.5rem 1rem;
    padding-bottom: 3.75rem;
    background-color: #1B1D24;
`;

export const CommonChatListContainer = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 6.0625rem;
`;