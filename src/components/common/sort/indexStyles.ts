import { createGlobalStyle } from "styled-components";

/**
 * @brief 필터 컴포넌트 스타일
 */

export const SortCreateStyle = createGlobalStyle`
    .ant-select {
        width: auto !important;
        display: flex !important;
        flex-direction: row-reverse !important;
        align-items: center !important;
        column-gap: 0.25rem !important;
        padding: 0 !important;
        background-color: transparent !important;
        border: none !important;
    }

    .ant-select-content {
        width: auto !important;
        margin-inline-end: 0 !important;
        font-family: "Pretendard-SemiBold" !important;
        font-size: 0.875rem !important;
        color: white !important;
    }

    .ant-select-suffix {
        position: initial !important;
    }

    .ant-select-dropdown {
        width: auto !important;
        border-radius: 0.375rem !important;
        padding: 0.25rem !important;
        background-color: #1B1D24 !important;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3) !important;
    }

    .ant-select-item {
        border-radius: 0.25rem !important;
        padding: 0.375rem 0.75rem !important;
        
        .ant-select-item-option-content {
            font-size: 0.75rem !important;
            color: white !important;
        }
    }

    .ant-select-item-option-selected {
        background-color: #272A34 !important;
        font-family: "Pretendard-Bold" !important;
    }
`;