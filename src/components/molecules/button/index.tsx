import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "./indexStyles";

/**
 * @brief button 컴포넌트
 */

interface Props {
    loading?: boolean;
    disabled?: boolean;
    bgColor: string;
    text: string;
    className?: string;
    onClick: () => void;
}

export const CommonButton = (props: Props) => {
    return (
        <Button
            disabled={props.disabled || props.loading}
            $bgColor={props.bgColor}
            className={props.className}
            onClick={props.onClick}
        >
            {props.loading ? (
                <Spin indicator={<LoadingOutlined spin style={{ color: "white", fontSize: "1.5rem" }} />} />
            ) : (
                <span>{props.text}</span>
            )}
        </Button>
    )
}