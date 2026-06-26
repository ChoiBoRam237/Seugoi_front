import styled from "styled-components";

/**
 * @brief 마이페이지 스타일
 */

export const MypageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1.5rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;

export const MypageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 3.5rem;
`;

export const MypageInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
`;

// profile
export const MypageProfile = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.875rem;
`;

export const MypageProfileImg = styled.div<{ $src: string }>`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const MypageProfileText = styled.p`
    font-family: "Pretendard-SemiBold" !important;
    font-size: 1.25rem;
    color: white;
`;

// 최근 조회한 스터디
export const MypageLatestStudy = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8125rem;
`;

export const MypageLatestStudyText = styled.p`
    font-size: 1rem;
    color: white;
`;

export const MypageLatestList = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.9375rem;
    flex-shrink: 0;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const MypageLatestStudyItem = styled.div`
    width: 10.125rem;
    height: 100%;
`;

// 찜한 스터디
export const MypageBookmarkStudy = styled.button`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    background-color: var(--background);

    &:hover,
    &:active {
        background-color: var(--third-primary);
    }
`;

export const MypageBookmarkStudyText = styled.p`
    font-size: 1rem;
    color: white;
`;