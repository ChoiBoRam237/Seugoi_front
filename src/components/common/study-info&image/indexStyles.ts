import styled from "styled-components";

/**
 * @brief 스터디 이미지 컴포넌트 스타일
 */

export const InfoAndImageBgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 10.9375rem;
`;

export const InfoAndImageBg = styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;
    opacity: 0.5;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const InfoAndImageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.0625rem;
`;

export const InfoAndImageTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoAndImageTitle = styled.p`
    font-family: 'Pretendard-Bold' !important;
    font-size: 2.5rem;
    line-height: 2.75rem;
    color: white;
`;

export const InfoAndImageCategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.125rem;
`;

export const InfoAndImageCategory = styled.p`
    font-size: 0.875rem;
    color: white;
`;

export const InfoAndImageDday = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 6.25rem;
    padding: 0.375rem 0.75rem;

    font-size: 0.875rem;
    line-height: 1rem;
    color: white;
`;