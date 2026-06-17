import styled from "styled-components";

/**
 * @brief 스터디 생성 스타일
 */

export const GenerateContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
`;

export const GenerateHeader = styled.div`
    width: 100%;
    height: 5.4375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem 0;
`;

export const GenerateHeaderNumberWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
`;

export const GenerateHeaderNumber = styled.button`
    width: 2.0625rem;
    height: 2.0625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--third-primary);

    font-family: 'Pretendard-SemiBold' !important;
    font-size: 1rem;
    color: white;

    &.active {
        background-color: var(--primary);
    }
`;

export const GenerateTitle = styled.p`
    font-family: 'Pretendard-ExtraBold' !important;
    font-size: 1.5rem;
    color: white;
`;