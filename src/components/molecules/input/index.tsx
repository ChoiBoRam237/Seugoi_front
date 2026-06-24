import React from "react";
import { Input, InputInnerWrapper, InputLabel, InputLabelWrapper, InputWrapper } from "./indexStyles";

/**
 * @brief input 컴포넌트
 */

interface InputProps {
    className?: string;
    labelText?: string;
    required?: boolean;
    Icon?: React.ReactNode;
    input: {
        placeholder: string;
        className?: string;
        value: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
    }[];
}

export const CommonInput = (props: InputProps) => {
    return (
        <InputWrapper>
            {(props.labelText || props.Icon) && (
                <InputLabelWrapper>
                    {props.Icon && (
                        <>{props.Icon}</>
                    )}

                    {props.labelText && (
                        <InputLabel>
                            {props.labelText}&nbsp;
                            {props.required && <span className="text-[#FF0000]">*</span>}
                        </InputLabel>
                    )}
                </InputLabelWrapper>
            )}

            <InputInnerWrapper>
                {props.input.map((input, index) => (
                    <Input
                        key={index}
                        id="input"
                        className={`${props.className} ${input.className}`}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={input.onChange}
                    />
                ))}
            </InputInnerWrapper>
        </InputWrapper>
    )
}