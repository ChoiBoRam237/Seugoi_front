import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { queryClient } from "@/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNoticeUpdateApi } from "./_api/GET";
import { patchNoticeUpdateApi } from "./_api/PATCH";

/**
 * @brief 공지 수정 컨트롤
 */

export const useControlNoticeUpdate = () => {
    const params = useParams();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [studyCode, setStudyCode] = useState<number>();
    const [updateOpen, setUpdateOpen] = useState<boolean>(false);

    // 특정 공지 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["notice"],
        queryFn: () => getNoticeUpdateApi.getNotice(Number(params.noticeCode!)),
        enabled: !!params.noticeCode
    });

    // 공지 수정 api
    const patchNoticeUpdate = useMutation({
        mutationFn: () => patchNoticeUpdateApi.patchNoticeUpdate(Number(params.noticeCode!), title, content),
        onSuccess: () => {
            setUpdateOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("공지 수정 에러 : ", error);
        }
    });

    const onFetch = () => {
        queryClient.invalidateQueries({
            queryKey: ["notice"]
        });
    }

    const onNoticeUpdate = () => {
        patchNoticeUpdate.mutate();
    }

    const dataCheck = () => {
        return title !== "" || content !== "";
    }

    useEffect(() => {
        if (data) {
            setStudyCode(data.studyCode);
            setTitle(data.title);
            setContent(data.content);
        }
    }, [data]);

    return {
        isLoading: isLoading || isFetching,
        updateLoading: patchNoticeUpdate.isPending,
        studyCode,
        title, setTitle,
        content, setContent,
        updateOpen, setUpdateOpen,
        dataCheck,
        onFetch, onNoticeUpdate,
    }
}