import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudyDetail } from "@/components/types/study";
import { IUser } from "@/components/types/user";
import { getStudyDetailApi } from "./_api/GET";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudyDetail = () => {
    const params = useParams();
    const [studyData, setStudyData] = useState<IStudyDetail | null>(null); // 스터디 데이터
    const [adminData, setAdminData] = useState<IUser | null>(null); // 관리자 정보

    // 특정 스터디 상세 조회 api
    const { data, isLoading } = useQuery({
        queryKey: ["studyDetail", params.studyId],
        queryFn: () => getStudyDetailApi.getStudyDetail(params.studyId!),
        enabled: !!params.studyId,
    });

    useEffect(() => {
        if (!data) return;
        setStudyData(data?.study);
        setAdminData(data?.admin);
    }, [data]);

    return {
        isLoading: isLoading,
        studyData, adminData,
    }
}