import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postStudyDetailApi } from "../../_api/POST";
import { StudyProps } from ".";

/**
 * @brief 스터디 상세페이지 컨트롤
 */

export const useControlStudy = (props: StudyProps) => {
    // 스터디 가입 api
    const postStudyJoin = useMutation({
        mutationFn: () => postStudyDetailApi.postStudyJoin(props.studyCode),
        onSuccess: () => {
            props.onFetch();
        },
        onError: (error: AxiosError) => {
            console.error("스터디 가입 에러 : ", error);
        }
    });

    // 스터디 가입
    const onStudyJoin = () => {
        postStudyJoin.mutate();
    }

    return {
        isJoinLoading: postStudyJoin.isPending,
        onStudyJoin
    }
}