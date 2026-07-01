import styled from "styled-components";

/**
 * @brief 과제 상세 스타일
 */

export const AsgmtContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    padding: 0 1.5rem;
    padding-bottom: 4.875rem;
`;

// 과제 정보
export const AsgmtInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.625rem;
`;

export const AsgmtInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
`;

export const AsgmtInfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const AsgmtInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AsgmtInfoTextWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.375rem;
`;

export const AsgmtInfoText = styled.p`
    font-size: 0.875rem;
    color: var(--primary);

    &.link { color: #0075FF; }
    &.error { color: var(--red); }
`;

export const AsgmtInfoTitle = styled.p`
    font-family: "Pretendard-Bold" !important;
    font-size: 1rem;
    color: white;
`;

export const AsgmtInfoPre = styled.pre`
    font-size: 0.875rem;
    color: white;
`;

export const AsgmtLinkWrapper = styled.button`
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
`;

export const AsgmtLine = styled.hr`
    width: 100%;
    height: 1px;
    border-color: #656D86;
`;

// 댓글
export const AsgmtCommentList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.8125rem;
`;

export const AsgmtCommentNoData = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1.5rem;
    
    font-size: 0.875rem;
    color: #767F9A;
    text-align: center;
`;

export const AsgmtCommentNoDataImg = styled.div<{ $src: string }>`
    width: 4.4375rem;
    height: 4.75rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;