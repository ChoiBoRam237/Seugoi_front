import { useState } from "react";
import { BoardProps } from "../..";

/**
 * @brief 과제 추가 컨트롤
 */

export const useControlAssignment = (props: BoardProps) => {
    const [title, setTitle] = useState<string>(""); // 제목
    const [content, setContent] = useState<string>(""); // 내용
    const [linkName, setLinkName] = useState<string>(""); // 링크 이름
    const [linkUrl, setLinkUrl] = useState<string>(""); // 링크 주소
    const [imageList, setImageList] = useState<File[]>([]); // 이미지 리스트
    const [previewImageList, setPreviewImageList] = useState<string[]>([]); // 이미지 미리보기 리스트

    // 필수 작성 데이터 모두 입력했으면 true, 아니면 false
    const dataCheck = () => {
        return title !== "" && content !== "";
    }

    return {
        title, setTitle,
        content, setContent,
        linkName, setLinkName,
        linkUrl, setLinkUrl,
        imageList, setImageList,
        previewImageList, setPreviewImageList,
        dataCheck,
    }
}