import React, { useRef } from "react";
import { Spin, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import { IoMdImage } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { ChatInput, ChatInputContainer, ChatInputImage, ChatInputImageItem, ChatInputImageList, ChatInputLoading, ChatInputWrapper } from "./indexStyles";
import { LoadingOutlined } from "@ant-design/icons";

/**
 * @brief 채팅 인풋 컴포넌트
 */

interface Props {
    isLoading: boolean;
    loadingText: string;
    disabled?: boolean;
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    previewImgList: string[];
    setPreviewImgList: React.Dispatch<React.SetStateAction<string[]>>;
    setImageList: React.Dispatch<React.SetStateAction<File[]>>;
    onSend: () => void;
}

export const CommonChatInput = (props: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = "22px";

        const maxHeight = 5 * 16;
        const height = Math.min(textarea.scrollHeight, maxHeight);

        textarea.style.height = `${height}px`;
        textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";

        props.setValue(e.target.value);
    }

    return (
        <ChatInputContainer>
            {!props.isLoading ? (
                <>
                    {props.previewImgList.length > 0 && (
                        <ChatInputImageList>
                            {props.previewImgList.map((image, index) => (
                                <ChatInputImageItem key={index}>
                                    <button
                                        className="absolute top-2 right-2"
                                        onClick={() => {
                                            props.setImageList(prev => prev.filter((_, i) => i !== index));
                                            props.setPreviewImgList(prev => prev.filter((_, i) => i !== index));
                                        }}
                                    >
                                        <HiMiniXMark size={24} color="var(--red)" />
                                    </button>

                                    <ChatInputImage $src={image} />
                                </ChatInputImageItem>
                            ))}
                        </ChatInputImageList>
                    )}

                    <ChatInputWrapper>
                        <ChatInput
                            id="chat-input"
                            ref={textareaRef}
                            placeholder={props.placeholder}
                            disabled={props.disabled}
                            value={props.value}
                            onChange={onTextareaChange}
                        />

                        <Upload
                            name="image-file"
                            accept="image/*"
                            showUploadList={false}
                            multiple={true}
                            disabled={props.disabled}
                            className="w-7! h-7!"
                            beforeUpload={(file) => {
                                const isLt10MB = file.size / 1024 / 1024 <= 10;
                        
                                if (!isLt10MB) {
                                    alert("이미지 용량은 10MB 이하만 업로드 가능합니다.");
                                    return Upload.LIST_IGNORE;
                                }

                                if (!file.type.includes("image")) {
                                    alert("이미지만 업로드가 가능합니다.")
                                    return Upload.LIST_IGNORE;
                                }
                        
                                return false; // 자동 업로드 방지
                            }}
                            onChange={(info) => {
                                const file = info.file as RcFile;
                            
                                if (!file) return;
                            
                                props.setImageList(prev => {
                                    if (prev.length >= 3) return prev;
                                    return [...prev, file];
                                });
                            
                                props.setPreviewImgList(prev => {
                                    if (prev.length >= 3) return prev;
                                    return [...prev, URL.createObjectURL(file)];
                                });
                            }}
                        >
                            <button disabled={props.disabled}>
                                <IoMdImage size={28} color="#D2D7E8" />
                            </button>
                        </Upload>

                        <button
                            disabled={props.disabled}
                            onClick={props.onSend}
                        >
                            <IoSend size={26} color="#D2D7E8" />
                        </button>
                    </ChatInputWrapper>
                </>
            ) : (
                <ChatInputLoading>
                    <span>{props.loadingText}</span>
                    <Spin indicator={<LoadingOutlined spin style={{ color: "white" }} />} />
                </ChatInputLoading>
            )}
        </ChatInputContainer>
    )
}