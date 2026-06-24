import styled from "styled-components";

/**
 * @brief 화살표 헤더 컴포넌트 스타일
 */

export const ArrowHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 47.9375rem;
    height: auto;
    background-color: var(--background);
    z-index: 10;
`;

export const ArrowHeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1.5rem;
`;

export const ArrowHeaderText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 1.125rem;
    color: white;
`;