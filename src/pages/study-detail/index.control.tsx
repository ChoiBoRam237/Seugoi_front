import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudyDetail } from "@/components/types/study";
import { IUser } from "@/components/types/user";
import { getStudyDetailApi } from "./_api/GET";
import { postStudyDetailApi } from "./_api/POST";
import { queryClient } from "@/queryClient";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudyDetail = () => {
    const params = useParams();
    const [studyData, setStudyData] = useState<IStudyDetail | null>(null); // 스터디 데이터
    const [adminData, setAdminData] = useState<IUser | null>(null); // 관리자 정보
    const [status, setStatus] = useState<"homework" | "introduction">("introduction"); // 과제하기 or 스터디 소개

    // 특정 스터디 상세 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyDetail", params.studyCode],
        queryFn: () => getStudyDetailApi.getStudyDetail(params.studyCode!),
        enabled: !!params.studyCode,
    });

    // 스터디 가입 api
    const postStudyJoin = useMutation({
        mutationFn: () => postStudyDetailApi.postStudyJoin(Number(params.studyCode!)),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["studyDetail", String(data.studyCode)],
            });
        },
        onError: (error: AxiosError) => {
            console.error("스터디 가입 에러 : ", error);
        }
    });

    const handleStudyJoin = () => {
        postStudyJoin.mutate();
    }

    useEffect(() => {
        if (!data) return;
        setStudyData(data?.study);
        setAdminData(data?.admin);
    }, [data]);

    return {
        status, setStatus,
        isLoading: isLoading || isFetching,
        isJoinLoading: postStudyJoin.isPending,
        studyData, adminData,
        isAdmin: data?.isAdmin ?? false,
        handleStudyJoin,
    }
}