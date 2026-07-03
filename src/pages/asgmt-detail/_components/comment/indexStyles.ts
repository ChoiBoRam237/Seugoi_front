import styled from "styled-components";

/**
 * @breif 과제 댓글 스타일
 */

export const CommentContainer = styled.div`
    width: 100%;
    display: flex;
    column-gap: 1rem;
`;

export const CommentProfile = styled.div<{ $src: string }>`
    width: 2.3125rem;
    height: 2.3125rem;
    border-radius: 50%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CommentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const CommentContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const CommentContentText = styled.pre`
    font-size: 0.875rem;
    color: white;

    &.success { color: var(--primary); }
    &.wait { color: #D2D7E8; }
`;

export const CommentContentTextarea = styled.textarea`
    width: 100%;
    height: 2.5rem;
    max-height: 5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--gray-dark);
    border-radius: 0.5rem;
    overflow: hidden;

    font-size: 0.875rem;
    color: white;

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

export const CommentInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CommentInfoName = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1rem;
    color: white;
`;

export const CommentInfoDate = styled.p`
    font-size: 0.75rem;
    color: var(--white-40);
`;

export const CommentImageList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
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

export const CommentImageWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 17.5rem;
    height: 9.375rem;
`;

export const CommentImage = styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;
    border-radius: 0.375rem;
    flex-shrink: 0;
    cursor: pointer;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CommentUploadImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;
    border-radius: 0.375rem;
    background-color: var(--second-primary);

    font-size: 0.875rem;
    color: white;
`;

export const CommentRemoveButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.5);
`;

export const CommentSaveWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const CommentSaveButton = styled.button`
    width: 4.125rem;
    height: 2.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background-color: var(--primary);

    font-size: 0.75rem;
    color: white;

    &:disabled {
        background-color: var(--disabled);
    }
`;