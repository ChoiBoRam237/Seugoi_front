import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postGenerateBoardApi } from "../../_api/POST";
import { AxiosError } from "axios";

/**
 * @brief 공지 추가 컨트롤
 */

export const useControlNotice = () => {
    const [title, setTitle] = useState<string>(""); // 제목
    const [content, setContent] = useState<string>(""); // 내용
    const [successOpen, setSuccessOpen] = useState<boolean>(false); // 공지 생성 성공

    // 공지 생성 api
    const postGenerateNotice = useMutation({
        mutationFn: (studyCode: number) => {
            return postGenerateBoardApi.postGenerateNotice(studyCode, title, content)
        },
        onSuccess: () => {
            setSuccessOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("공지 생성 에러 : ", error);
        }
    });

    const onGenerate = (studyCode: number) => {
        postGenerateNotice.mutate(studyCode);
    }

    return {
        title, setTitle,
        content, setContent,

        isLoading: postGenerateNotice.isPending,
        successOpen, setSuccessOpen,
        onGenerate,
    }
}