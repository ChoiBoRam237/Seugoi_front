import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { commonStudyApi } from "@/api/study";
import { useEffect, useState } from "react";
import { IStudy } from "@/components/types/study";

/**
 * @brief 최근 조회한 스터디 API 훅
 */

interface Props {
    enabled?: boolean;
}

export const useLatestStudy = (props: Props) => {
    const [latestStudyList, setLatestStudyList] = useState<IStudy[]>([]);

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyView"],
        queryFn: () => commonStudyApi.getStudyView(),
        enabled: props.enabled,
    });

    const onFetchLatestStudy = () => {
        queryClient.invalidateQueries({
            queryKey: ["studyView"]
        });
    }

    useEffect(() => {
        if(data) setLatestStudyList(data);
    }, [data]);

    return {
        latestLoading: isLoading || isFetching,
        latestStudyList,
        onFetchLatestStudy
    }
}