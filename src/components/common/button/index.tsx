import { Button } from "./indexStyles";

/**
 * @brief button 공통 컴포넌트
 */

interface ButtonProps {
    disabled?: boolean;
    bgColor: string;
    text: string;
}

export const CommonButton = (props: ButtonProps) => {
    return (
        <Button
            disabled={props.disabled}
            $bgColor={props.bgColor}
        >
            {props.text}
        </Button>
    )
}