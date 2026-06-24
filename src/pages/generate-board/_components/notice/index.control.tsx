import { useState } from "react";
import { BoardProps } from "../..";

/**
 * @brief 공지 추가 컨트롤
 */

export const useControlNotice = (props: BoardProps) => {
    const [title, setTitle] = useState<string>(""); // 제목
    const [content, setContent] = useState<string>(""); // 내용

    // 필수 작성 데이터 모두 입력했으면 true, 아니면 false
    const dataCheck = () => {
        return title !== "" && content !== "";
    }

    return {
        title, setTitle,
        content, setContent,
        dataCheck,
    }
}