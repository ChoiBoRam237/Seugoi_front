import { Button } from "./indexStyles";

/**
 * @brief button 컴포넌트
 */

interface ButtonProps {
    disabled?: boolean;
    bgColor: string;
    text: string;
    onClick: () => void;
}

export const CommonButton = (props: ButtonProps) => {
    return (
        <Button
            disabled={props.disabled}
            $bgColor={props.bgColor}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}