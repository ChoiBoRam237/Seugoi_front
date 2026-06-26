import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

/**
 * @brief 로딩 화면
 */

interface LoadingProps {
    text?: string;
}

export const CommonLoading = (props: LoadingProps) => {
    return (
        <LoadingContainer>
            <Spin indicator={<LoadingOutlined spin style={{ color: "white", fontSize: "2rem" }} />} />
            <LoadingText>{props.text || "로딩 중..."}</LoadingText>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1rem;
`;

export const LoadingText = styled.p`
    font-size: 1rem;
    color: white;
`;