import styled from "styled-components";

/**
 * @brief 메인화면 스타일
 */

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 1.5rem;
    padding-bottom: calc(4.125rem + 1.5rem);
`;

export const StudyList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.9375rem;

    & > * {
        width: calc((100% - 2.8125rem) / 4) !important;
    }

    @media (max-width: 767px) {
        & > * {
            width: calc((100% - 0.9375rem) / 2) !important;
        }
    }
`;