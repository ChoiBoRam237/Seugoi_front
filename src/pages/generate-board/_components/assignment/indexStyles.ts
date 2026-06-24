import styled from "styled-components";

/**
 * @brief 과제 추가 스타일
 */

export const AsgmtImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const AsgmtImageLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const AsgmtImageLabel = styled.p`
    font-size: 1rem;
    color: white;
`;

export const AsgmtImageUplaod = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--gray-dark);
    border-radius: 0.625rem;
`;

export const AsgmtImageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
`;

export const AsgmtImageItem = styled.div<{ $src: string }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const AsgmtImageItemX = styled.button`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
`;