import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudyDetail } from "@/components/types/study";
import { IUser } from "@/components/types/user";
import { getStudyDetailApi } from "./_api/GET";
import { AxiosError } from "axios";
import { deleteStudyDetailApi } from "./_api/DELETE";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudyDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [studyData, setStudyData] = useState<IStudyDetail | null>(null); // 스터디 데이터
    const [adminData, setAdminData] = useState<IUser | null>(null); // 관리자 정보
    const [status, setStatus] = useState<"assignment" | "introduction">("introduction"); // 과제하기 or 스터디 소개

    const [deleteStudyOpen, setDeleteStudyOpen] = useState<boolean>(false); // 스터디 삭제 확인 팝업
    const [exitStudyOpen, setExitStudyOpen] = useState<boolean>(false); // 스터디 탈퇴 확인 팝업

    // 특정 스터디 상세 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyDetail", params.studyCode],
        queryFn: () => getStudyDetailApi.getStudyDetail(params.studyCode!),
        enabled: !!params.studyCode,
    });

    // 스터디 삭제 api
    const deleteStudy = useMutation({
        mutationFn: () => deleteStudyDetailApi.deleteStudy(Number(params.studyCode)!),
        onSuccess: () => {
            navigate(`/${LinkEnum.STUDY}/${LinkEnum.LIST}`);
        },
        onError: (error: AxiosError) => {
            console.error("스터디 삭제 에러 : ", error);
        },
    });

    const onDeleteStudy = () => {
        deleteStudy.mutate();
    }

    useEffect(() => {
        if (!data) return;
        setStudyData(data?.study);
        setAdminData(data?.admin);
    }, [data]);

    return {
        status, setStatus,
        isLoading: isLoading || isFetching,
        studyData, adminData,
        studyCode: Number(params.studyCode),
        isAdmin: data?.isAdmin ?? false,
        
        deleteStudyOpen, setDeleteStudyOpen,
        exitStudyOpen, setExitStudyOpen,

        onDeleteStudy,
    }
}