import styled from "styled-components";

/**
 * @brief 과제 폼 스타일
 */

export const AsgmtFormContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1.5rem;
    padding: 1.4375rem 1.5625rem;
`;

export const AsgmtFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const AsgmtFormImageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const AsgmtFormImageLabelWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const AsgmtFormImageLabel = styled.p`
    font-size: 1rem;
    color: white;
`;

export const AsgmtFormImageUplaod = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--gray-dark);
    border-radius: 0.625rem;
`;

export const AsgmtFormImageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
`;

export const AsgmtFormImageItem = styled.div<{ $src: string }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const AsgmtFormImageItemX = styled.button`
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
`;