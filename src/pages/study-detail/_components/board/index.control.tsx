import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStudyDetailApi } from "../../_api/GET";
import { IStudyBoard } from "@/components/types/study";
import { deleteStudyDetailApi } from "../../_api/DELETE";
import { queryClient } from "@/queryClient";
import { AxiosError } from "axios";

/**
 * @brief 과제 보기 컨트롤
 */

export const useControlBoard = ({ studyCode }: { studyCode: number }) => {
    const [boardList, setBoardList] = useState<IStudyBoard[]>([]);
    const [overflowMenuOpen, setOverflowMenuOpen] = useState<boolean>(false);
    const [deleteNoticeCode, setDeleteNoticeCode] = useState<number | null>(null); // 삭제할 공지 코드
    const [deleteNoticeOpen, setDeleteNoticeOpen] = useState<boolean>(false); // 공지 삭제 확인

    // 스터디 과제/공지 목록 조회 api
    const {
        data,
        isLoading,
        isFetching
    } = useQuery({
        queryKey: ["studyBoard"],
        queryFn: () => getStudyDetailApi.getStudyBoard(studyCode)
    });

    // 공지 삭제 api
    const deleteNotice = useMutation({
        mutationFn: () => deleteStudyDetailApi.deleteNotice(deleteNoticeCode),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["studyBoard"] });
        },
        onError: (error: AxiosError) => {
            console.error("공지 삭제 에러 : ", error);
        }
    });

    const onDeleteNotice = () => {
        deleteNotice.mutate();
    }

    useEffect(() => {
        if (data) setBoardList(data);
    }, [data]);

    return {
        isLoading: isLoading || isFetching || deleteNotice.isPending,
        boardList,
        overflowMenuOpen, setOverflowMenuOpen,
        deleteNoticeCode, setDeleteNoticeCode,
        deleteNoticeOpen, setDeleteNoticeOpen,
        onDeleteNotice,
    }
}