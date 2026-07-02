import { Tabs } from "antd";
import styled from "styled-components";

/**
 * @brief 과제/공지 생성 스타일
 */

export const BoardTabs = styled(Tabs)`
    flex: 1 !important;

    .ant-tabs-nav {
        margin: 0 !important;

        &::before {
            border: none !important;
        }
    }

    .ant-tabs-body {
        display: flex !important;
        height: 100% !important;
    }

    .ant-tabs-tab {
        width: 8.6875rem !important;
        height: 2.5625rem !important;
        display: flex !important;
        justify-content: center !important;
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 0.625rem 0.625rem 0 0 !important;
        background-color: #1D2027 !important;
    }

    .ant-tabs-tab-active {
        border: none !important;
        background-color: var(--second-primary) !important;
    }

    .ant-tabs-tab-btn {
        font-family: "Pretendard-Bold" !important;
        font-size: 1rem !important;
        color: white !important;
    }

    .ant-tabs-ink-bar {
        display: none !important;
    }

    .ant-tabs-content-holder,
    .ant-tabs-content,
    .ant-tabs-content-active {
        flex: 1 !important;
        display: flex !important;
        flex-direction: column !important;
    }

    .ant-tabs-content-hidden {
        display: none !important;
    }
`;