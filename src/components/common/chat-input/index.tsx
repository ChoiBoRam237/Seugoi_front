import React, { useRef } from "react";
import { Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { IoMdImage } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { ChatInput, ChatInputContainer, ChatInputImage, ChatInputImageItem, ChatInputImageList, ChatInputWrapper } from "./indexStyles";

/**
 * @brief 채팅 인풋 컴포넌트
 */

interface Props {
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
                                <HiMiniXMark size={24} color="white" />
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
                    value={props.value}
                    onChange={onTextareaChange}
                />

                <Upload
                    name="image-file"
                    accept="image/*"
                    showUploadList={false}
                    multiple={true}
                    maxCount={3}
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
                    onChange={(info: UploadChangeParam<UploadFile>) => {
                        const validFiles = info.fileList.filter(file => {
                            const isLt10MB = (file.size ?? 0) / 1024 / 1024 <= 10;
                            return isLt10MB && file.originFileObj;
                        });
                        
                        props.setImageList(
                            validFiles.map(file => file.originFileObj as File)
                        );

                        props.setPreviewImgList(
                            validFiles.map(file =>
                                URL.createObjectURL(file.originFileObj as File)
                            )
                        );
                    }}
                >
                    <button>
                        <IoMdImage size={28} color="#D2D7E8" />
                    </button>
                </Upload>

                <button onClick={props.onSend}>
                    <IoSend size={26} color="#D2D7E8" />
                </button>
            </ChatInputWrapper>
        </ChatInputContainer>
    )
}