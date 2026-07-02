import React from "react";
import { CommonInput } from "@/components/molecules/input";
import { CommonTextarea } from "@/components/molecules/textarea";
import { CommonButton } from "@/components/molecules/button";
import { NoticeFormContainer, NoticeFormWrapper } from "./indexStyles";

/**
 * @brief 공지 폼
 */

interface Props {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;

    isLoading: boolean;
    btnText: string;
    onClick: () => void;
}

export const CommonNoticeForm = (props: Props) => {
    // 필수 작성 데이터 모두 입력했으면 true, 아니면 false
    const dataCheck = () => {
        return props.title !== "" && props.content !== "";
    }

    return (
        <NoticeFormContainer>
            <NoticeFormWrapper>
                <CommonInput
                    className="border-[#4D5365]! placeholder-[#4D5365]!"
                    labelText="공지 제목"
                    input={[
                        { 
                            placeholder: "제목을 입력해주세요",
                            value: props.title, 
                            onChange: (e) => props.setTitle(e.target.value)
                        }
                    ]}
                />

                <CommonTextarea
                    placeholder="내용을 입력해주세요"
                    labelText="공지 내용"
                    value={props.content}
                    setValue={props.setContent}
                />
            </NoticeFormWrapper>

            <CommonButton
                loading={props.isLoading}
                disabled={!dataCheck()}
                text={props.btnText}
                bgColor="var(--primary)"
                onClick={props.onClick}
            />
        </NoticeFormContainer>
    )
}