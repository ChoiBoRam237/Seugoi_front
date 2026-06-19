import styled from "styled-components";

/**
 * @brief 스터디 생성 모달 컴포넌트 스타일
 */

export const GenerateModalContainer = styled.div`
    position: relative;
    margin-bottom: -1.9375rem;
`;

export const GenerateModalImg = styled.div<{ $src: string }>`
    width: 6.3125rem;
    height: 12.8125rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const GenerateModalCircle = styled.div<{
    $bgColor: string;
    $top: number;
    $left: number;
}>`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    width: 0.8125rem;
    height: 0.8125rem;
    border-radius: 50%;
    background-color: ${({ $bgColor }) => $bgColor};
`;

export const GenerateModalRectangle = styled.div<{
    $bgColor: string;
    $top: number;
    $left: number;
    $rotate: number;
}>`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    width: 0.4375rem;
    height: 1rem;
    background-color: ${({ $bgColor }) => $bgColor};
    transform: rotate(${({ $rotate }) => $rotate}deg);
`;