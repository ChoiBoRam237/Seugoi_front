import React from "react";
import { Input } from "./indexStyles";

/**
 * @brief input 컴포넌트
 */

interface InputProps {
    className?: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const CommonInput = (props: InputProps) => {
    return (
        <Input
            id="input"
            className={props.className}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}