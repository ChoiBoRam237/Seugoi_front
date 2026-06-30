import { useState } from "react";

/**
 * @brief 과제 상세 컨트롤
 */

export const useControlAsgmtDetail = () => {
    const [comment, setComment] = useState<string>(""); // 댓글 내용
    const [imageList, setImageList] = useState<File[]>([]); // 이미지 파일
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 미리보기 이미지 파일

    return {
        comment, setComment,
        imageList, setImageList,
        previewImgList, setPreviewImgList,
    }
}