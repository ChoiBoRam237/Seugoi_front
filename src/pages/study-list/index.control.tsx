import { useEffect, useState } from "react";
import { SelectType } from "@/components/types/select";
import { IStudy } from "@/components/types/study";
import { sortData } from "@/components/common/sort/index.constants";
import { studyFilter } from "./index.constants";
import { useQuery } from "@tanstack/react-query";
import { getStudyListApi } from "./_api/GET";
import { queryClient } from "@/queryClient";

/**
 * @brief 스터디 목록 컨트롤
 */

export const useControlStudyList = () => {
    const [selectedFilter, setSelectedFilter] = useState<SelectType>(studyFilter[0]); // 필터
    const [selectedSort, setSelectedSort] = useState<SelectType>(sortData[0]); // 정렬
    const [studyList, setStudyList] = useState<IStudy[]>([]); // 스터디 목록

    // 스터디 목록 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyList", selectedFilter.value, selectedSort.value],
        queryFn: () => getStudyListApi.getStudyList(selectedFilter.value, selectedSort.value),
    });

    const onFetch = () => {
        queryClient.invalidateQueries({
            queryKey: ["studyList", selectedFilter.value, selectedSort.value],
        });
    }

    useEffect(() => {
        if (data) setStudyList(data);
    }, [data]);

    return {
        isLoading: isLoading || isFetching,
        studyList,
        selectedFilter, setSelectedFilter,
        selectedSort, setSelectedSort,
        onFetch,
    }
}