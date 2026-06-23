import styled from "styled-components";

/**
 * @brief 스터디 아이템 컴포넌트 스타일
 */

export const StudyContainer = styled.div`
    position: relative;
    width: 100%;
    height: 7.0625rem;
    border-radius: 0.9375rem;
    overflow: hidden;
`;

export const StudyImg = styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StudyGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.46));
    z-index: 1;
`;

export const StudyContent = styled.div`
    position: absolute;
    left: 0.625rem;
    bottom: 0.625rem;
    width: calc(100% - 1.25rem);
    display: flex;
    flex-direction: column;
    row-gap: 0.1875rem;
    z-index: 2;
`;

export const StudyTitle = styled.p`
    font-family: 'Pretendard-SemiBold' !important;
    font-size: 1rem;
    color: white;
`;

export const StudyText = styled.p`
    font-family: 'Pretendard-Light' !important;
    font-size: 0.6875rem;
    color: rgba(255, 255, 255, 0.75);
`;

export const StudyBookmark = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;