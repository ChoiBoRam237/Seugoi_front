import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styled from "styled-components";

/**
 * @brief 로딩 화면
 */

export const Loading = () => {
    return (
        <LoadingContainer>
            <Spin indicator={<LoadingOutlined spin style={{ color: "white", fontSize: "2rem" }} />} />
            <LoadingText>로딩 중...</LoadingText>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100dvh;
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