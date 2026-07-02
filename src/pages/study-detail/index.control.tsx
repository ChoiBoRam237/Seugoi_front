import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { deleteStudyDetailApi } from "./_api/DELETE";
import { LinkEnum } from "@/meta/link";
import { useStudyDetail } from "@/hooks/_api/useStudyDetail";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudyDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [status, setStatus] = useState<"assignment" | "introduction">(location?.state?.status || "introduction"); // 과제하기 or 스터디 소개
    
    const [deleteStudyOpen, setDeleteStudyOpen] = useState<boolean>(false); // 스터디 삭제 확인 팝업
    const [exitStudyOpen, setExitStudyOpen] = useState<boolean>(false); // 스터디 탈퇴 확인 팝업
    
    // 특정 스터디 상세 조회 hook
    const {
        studyDetailLoading,
        studyData,
        adminData,
        isAdmin
    } = useStudyDetail({ studyCode: params.studyCode });

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

    return {
        status, setStatus,
        isLoading: studyDetailLoading,
        studyData, adminData,
        studyCode: Number(params.studyCode),
        isAdmin: isAdmin ?? false,
        
        deleteStudyOpen, setDeleteStudyOpen,
        exitStudyOpen, setExitStudyOpen,

        onDeleteStudy,
    }
}