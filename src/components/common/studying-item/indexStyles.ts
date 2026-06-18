import { Progress } from "antd";
import styled from "styled-components";

/**
 * @brief 현재 진행중인 스터디 컴포넌트 스타일
 */

export const StudyingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.9375rem;
    overflow: hidden;
`;

export const StudyingBgImage = styled.div<{ $src: string }>`
    width: 100%;
    height: 100%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const StudyingGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.66));
    z-index: 1;
`;

export const StudyingContent = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    row-gap: 0.1875rem;
    z-index: 2;
`;

export const StudyingTitle = styled.p`
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.375rem;
    color: white;
`;

export const StudyingText = styled.p`
    font-size: 0.75rem;
    color: white;
`;

export const StudyingProgress = styled(Progress)`
    width: 100%;

    .ant-progress-rail {
        height: 0.25rem !important;
    }
`;