import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getStudyDetailApi } from "../../_api/GET";
import { IStudyBoard } from "@/components/types/study";

/**
 * @brief 과제 보기 컨트롤
 */

export const useControlBoard = ({ studyCode }: { studyCode: number }) => {
    const [boardList, setBoardList] = useState<IStudyBoard[]>([]);

    // 스터디 과제/공지 목록 조회 api
    const {
        data,
        isLoading,
        isFetching
    } = useQuery({
        queryKey: ["studyBoard"],
        queryFn: () => getStudyDetailApi.getStudyBoard(studyCode)
    });

    useEffect(() => {
        if(data) setBoardList(data);
    }, [data]);

    return {
        isLoading: isLoading || isFetching,
        boardList,
    }
}