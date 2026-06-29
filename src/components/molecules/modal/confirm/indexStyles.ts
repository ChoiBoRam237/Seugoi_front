import styled from "styled-components";

/**
 * @brief confirm 모달 컴포넌트 스타일
 */

// confirm modal
export const ConfirmModalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.125rem;
`;

export const ConfirmModalTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const ConfirmModalTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.125rem;
    color: white;
`;

export const ConfirmModalContent = styled.p`
    font-size: 0.875rem;
    color: white;
`;

export const ConfirmModalButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 0.5rem;
`;

export const ConfirmModalOkButton = styled.button`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary);

    font-size: 0.875rem;
    color: white;

    &:hover,
    &:active { background-color: #44B852; }
`;

export const ConfirmModalCancelButton = styled.button`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    font-size: 0.875rem;
    color: white;

    &:hover,
    &:active { background-color: rgba(82, 221, 99, 0.2); }
`;