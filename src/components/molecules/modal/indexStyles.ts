import styled, { createGlobalStyle } from "styled-components";

/**
 * @brief 모달 컴포넌트 스타일
 */

export const GlobalStyledModal = createGlobalStyle`
    .ant-modal-wrap {
        padding: 0 1.5rem !important;
    }

    .ant-modal {
        width: 100% !important;
        max-width: 21.25rem !important;

        .ant-modal-container {
            padding: 1.5rem !important;
            background-color: var(--third-primary) !important;
        }
    }

    .ant-modal-mask {
        background-color: var(--black-50) !important;
    }
`;

export const ModalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;

export const ModalTitle = styled.p`
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.25rem;
    color: white;
`;

export const ModalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;