import styled from "styled-components";

/**
 * @brief 채팅 인풋 컴포넌트 스타일
 */

export const ChatInputContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 1.125rem;
    border-radius: 1.5625rem 1.5625rem 0 0;
    padding: 1.25rem 1.5rem 1.875rem;
    background-color: var(--second-primary);
`;

export const ChatInputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
`;

export const ChatInput = styled.textarea`
    width: 100%;
    height: 1.375rem;
    max-height: 5rem;
    overflow: hidden;

    font-size: 0.875rem;
    color: white;

    &::placeholder { color: #767F9A; }

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        height: 3rem;
        background-color: #4F4F4F;
        border-radius: 3.125rem;
        background-clip: padding-box;
        border: 0.375rem solid transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const ChatInputImageList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
        height: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        width: 3rem;
        background-color: #4F4F4F;
        border-radius: 3.125rem;
        background-clip: padding-box;
        border: 0.375rem solid transparent;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const ChatInputImageItem = styled.div`
    position: relative;
    width: 11.8125rem;
    height: 9.9375rem;
    border-radius: 0.3125rem;
    overflow: hidden;
    flex-shrink: 0;
`;

export const ChatInputImage = styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

// 로딩
export const ChatInputLoading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 0.875rem;
    color: var(--white-80);
`;