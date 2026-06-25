import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postGenerateBoardApi } from "../../_api/POST";
import { AxiosError } from "axios";
import { ICommonStudyResponse } from "@/components/types/study";

/**
 * @brief 과제 추가 컨트롤
 */

export const useControlAssignment = () => {
    const [title, setTitle] = useState<string>(""); // 제목
    const [content, setContent] = useState<string>(""); // 내용
    const [linkName, setLinkName] = useState<string>(""); // 링크 이름
    const [linkUrl, setLinkUrl] = useState<string>(""); // 링크 주소
    const [imageList, setImageList] = useState<File[]>([]); // 이미지 리스트
    const [previewImageList, setPreviewImageList] = useState<string[]>([]); // 이미지 미리보기 리스트

    const [successData, setSuccessData] = useState<ICommonStudyResponse>(); // 과제 생성 후 응답 데이터
    const [successOpen, setSuccessOpen] = useState<boolean>(false); // 성공 팝업

    // 필수 작성 데이터 모두 입력했으면 true, 아니면 false
    const dataCheck = () => {
        return title !== "" && content !== "";
    }

    // 과제 생성 api
    const postGenerateAsgmt = useMutation({
        mutationFn: (studyCode: number) => {
            const formData = new FormData();
            title !== "" && formData.append("title", title);
            content !== "" && formData.append("content", content);
            linkName !== "" && formData.append("linkName", linkName);
            linkUrl !== "" && formData.append("linkUrl", linkUrl);
            imageList.length > 0 && imageList.forEach(image => formData.append("imageList", image));
            return postGenerateBoardApi.postGenerateAsgmt(Number(studyCode), formData);
        },
        onSuccess: (data) => {
            setSuccessData(data);
            setSuccessOpen(true);
        }, 
        onError: (error: AxiosError) => {
            console.error("과제 생성 에러 : ", error);
        }
    });

    const onGenerate = (studyCode: number) => {
        postGenerateAsgmt.mutate(studyCode);
    }

    return {
        title, setTitle,
        content, setContent,
        linkName, setLinkName,
        linkUrl, setLinkUrl,
        imageList, setImageList,
        previewImageList, setPreviewImageList,
        dataCheck,

        isLoading: postGenerateAsgmt.isPaused,
        successData,
        successOpen, setSuccessOpen,
        onGenerate,
    }
}