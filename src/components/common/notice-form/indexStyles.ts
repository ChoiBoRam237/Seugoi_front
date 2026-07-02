import styled from "styled-components";

/**
 * @brief 공지 폼 스타일
 */

export const NoticeFormContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 1.5rem;
    padding: 1.4375rem 1.5625rem;
    background-color: var(--second-primary);
`;

export const NoticeFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;