import styled from "styled-components";

/**
 * @brief 채팅 목록 스타일
 */

export const ChatListTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.5rem;
    color: white;
`;

export const CommonChatListContainer = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 6.0625rem;
`;

export const CommonNoData = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Pretendard-SemiBold" !important;
    font-size: 1.125rem;
    color: var(--white-80);
    text-align: center;
`;