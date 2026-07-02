import { Checkbox, Upload } from "antd";
import { NumericFormat } from "react-number-format";
import styled from "styled-components";

/**
 * @brief 스터디 생성 -> 기본 정보 컴포넌트 스타일
 */

export const InfoInnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.375rem;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
`;

export const InfoInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    column-gap: 1rem;

    @media (max-width: 767px) {
        flex-direction: column;
        row-gap: 1.25rem;
    }
`;

export const InfoInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;

export const InfoInputTitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 0.25rem;
`;

export const InfoInputTitle = styled.p`
    font-size: 1rem;
    color: white;
`;

export const InfoInputRequired = styled.p`
    font-size: 1rem;
    color: red;
`;


// 대표 이미지 업로드
export const InfoUpload = styled(Upload)`
    cursor: pointer !important;
    
    .ant-upload {
        width: 21.25rem !important;

        @media (max-width: 376px) {
            width: 100% !important;
        }
    }
`;

export const InfoImageUpload = styled.div`
    width: 100%;
    height: 9.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.9375rem;
    border-radius: 0.625rem;
    background-color: var(--third-primary);
`;

export const InfoImageUploadText = styled.p`
    font-size: 0.875rem;
    color: var(--white-50);
`;

export const InfoShowImage = styled.div<{ $src: string }>`
    width: 100%;
    height: 9.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.9375rem;
    border-radius: 0.625rem;

    background-image: ${({ $src }) => `url("${$src}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

// 카테고리
export const InfoCategory = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
`;

// 모집 인원
export const InfoPeopleCountWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.875rem;
`;

export const InfoPeopleCountInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.875rem;
`;

export const InfoPeopleCountInput = styled(NumericFormat)`
    width: 100%;
    height: auto;
    border: 1px solid var(--third-primary);
    border-radius: 0.625rem;
    padding: 0.75rem;
    outline: none;
    background-color: transparent;

    font-size: 1rem;
    color: white;

    &::placeholder {
        color: var(--third-primary);
    }
`;

export const InfoPeopleCheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 0.625rem;
`;

export const InfoPeopleCheckbox = styled(Checkbox)`
    .ant-checkbox {
        background-color: transparent !important;
        border-color: var(--white-50) !important;

        &::after {
            top: 50% !important;
            inset-inline-start: 5px !important;
        }
    }

    .ant-checkbox,
    .ant-checkbox-input {
        width: 1.25rem !important;
        height: 1.25rem !important;
    }

    .ant-checkbox-label {
        padding-inline-end: 0 !important;
        font-size: 0.875rem !important;
        color: white !important;
    }
`;