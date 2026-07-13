import styled from "styled-components";

/**
 * @brief 채팅 아이템 스타일
 */

export const ChatItemContainer = styled.button`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 0.625rem;
    padding: 0.875rem;
    background-color: #1B1D24;

    &:hover,
    &:active {
        background-color: #31343F;
    }
`;

export const ChatItemOneWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.625rem;
`;

export const ChatItemTwoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.25rem;
`;

export const ChatItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.25rem;
`;

export const ChatItemTime = styled.p`
    font-size: 0.875rem;
    color: var(--white-50);
`;

export const ChatItemUnreadCount = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--primary);

    font-family: "Pretendard-Bold" !important;
    font-size: 0.75rem;
    line-height: 0.5rem;
    color: white;
`;

export const ChatItemImg = styled.div<{ $src: string }>`
    width: 3rem;
    height: 3rem;
    border-radius: 0.625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const ChatItemStudyName = styled.p`
    font-family: "Pretendard-SemiBold" !important;
    font-size: 1.25rem;
    color: white;
`;

export const ChatItemLastMessage = styled.p`
    max-width: 13rem;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.875rem;
    color: var(--white-50);
    text-overflow: ellipsis;
    word-break:break-all;
    -webkit-box-orient:vertical;
`;