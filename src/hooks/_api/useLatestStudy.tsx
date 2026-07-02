import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { IStudy } from "@/components/types/study";
import { commonApi } from "@/util/_api";

/**
 * @brief 최근 조회한 스터디 API 훅
 */

interface Props {
    enabled?: boolean;
}

export const useLatestStudy = (props: Props) => {
    const [latestStudyList, setLatestStudyList] = useState<IStudy[]>([]);

    // 최근 조회한 스터디 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyView"],
        queryFn: () => commonApi.getStudyView(),
        enabled: props.enabled,
    });

    const onFetchLatestStudy = () => {
        queryClient.invalidateQueries({
            queryKey: ["studyView"]
        });
    }

    useEffect(() => {
        if (data) setLatestStudyList(data);
    }, [data]);

    return {
        latestLoading: isLoading || isFetching,
        latestStudyList,
        onFetchLatestStudy
    }
}