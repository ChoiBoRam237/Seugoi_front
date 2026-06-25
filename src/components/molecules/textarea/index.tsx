import React from "react";
import { Textarea, TextareaLabel, TextareaWrapper } from "./indexStyles";

/**
 * @brief textarea 컴포넌트
 */

interface TextareaProps {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    labelText: string;
}

export const CommonTextarea = (props: TextareaProps) => {
    return (
        <TextareaWrapper>
            {props.labelText && (
                <TextareaLabel>{props.labelText}</TextareaLabel>
            )}

            <Textarea
                id="textarea"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </TextareaWrapper>
    )
}