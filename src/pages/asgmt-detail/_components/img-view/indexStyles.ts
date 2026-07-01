import { Carousel } from "antd";
import styled, { createGlobalStyle } from "styled-components";

/**
 * @brief 이미지 보기 모달 스타일
 */

export const GlobalStyledModal = createGlobalStyle`
    .ant-modal-wrap {
        padding: 0 1.5rem !important;
    }

    .ant-modal {
        width: 100% !important;
        max-width: 21.25rem !important;
        height: 29.375rem !important;

        .ant-modal-container {
            background-color: var(--third-primary) !important;
        }
    }

    .ant-modal-container {
        height: 100% !important;
        padding: 0.5rem !important;
    }

    .ant-modal-mask {
        background-color: var(--black-50) !important;
    }
`;

export const ImgViewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
`;

export const ImgViewTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.625rem;
    padding-top: 0.8125rem;
`;

export const ImgViewTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1.25rem;
    color: white;
`;

export const ImgViewStyledCarousel = styled(Carousel)`
    width: 15rem !important;
    height: 100% !important;
`;

export const ImgViewWrapper = styled.div`
    width: 100%;
    height: 23.375rem;
    display: flex;
    align-items: center;
    column-gap: 1.125rem;
`;

export const ImgViewImage = styled.div<{ $src: string }>`
    width: 100%;
    height: 23.375rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;