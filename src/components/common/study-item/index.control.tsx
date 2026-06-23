import { useMutation } from "@tanstack/react-query";
import { postStudyItemApi } from "./_api/POST";
import { AxiosError } from "axios";

/**
 * @brief 스터디 아이템 컴포넌트 컨트롤
 */

interface StudyItemProps {
    onFetch: () => void;
}

export const useControlStudyItem = (props: StudyItemProps) => {
    // 스터디 북마크 토글 api
    const postBookmarkStudy = useMutation({
        mutationFn: (studyCode: number) => postStudyItemApi.postBookmarkStudy(studyCode),
        onSuccess: () => {
            props.onFetch();
        },
        onError: (error: AxiosError) => {
            console.error("스터디 북마크 토글 에러 : ", error);
        }
    });

    const onBookmark = (studyCode: number) => {
        postBookmarkStudy.mutate(studyCode);
    }

    return {
        onBookmark,
    }
}