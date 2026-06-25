import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { postStudyDetailApi } from "../../_api/POST";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudy = ({ studyCode }: { studyCode: number }) => {
    // 스터디 가입 api
    const postStudyJoin = useMutation({
        mutationFn: () => postStudyDetailApi.postStudyJoin(studyCode),
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

    return {
        isJoinLoading: postStudyJoin.isPending,
        handleStudyJoin,
    }
}