import { useEffect, useState } from "react";
import { SelectType } from "@/components/types/select";
import { IStudy } from "@/components/types/study";
import { sortData } from "@/components/common/sort/index.constants";
import { studyFilter } from "./index.constants";
import { useQuery } from "@tanstack/react-query";
import { useUserInfo } from "@/hooks/useUserInfo";
import { getStudyListApi } from "./_api/GET";

/**
 * @brief 스터디 목록 컨트롤
 */

export const useControlStudyList = () => {
    const { userCode } = useUserInfo();
    const [selectedFilter, setSelectedFilter] = useState<SelectType>(studyFilter[0]); // 필터
    const [selectedSort, setSelectedSort] = useState<SelectType>(sortData[0]); // 정렬
    const [studyList, setStudyList] = useState<IStudy[]>([]); // 스터디 목록

    // 스터디 목록 조회 api
    const { data, isLoading } = useQuery({
        queryKey: ["studyList", userCode, selectedFilter.value, selectedSort.value],
        queryFn: () => getStudyListApi.getStudyList(userCode, selectedFilter.value, selectedSort.value),
        enabled: !!userCode
    });

    useEffect(() => {
        if (data) setStudyList(data);
    }, [selectedFilter, selectedSort]);

    return {
        isLoading, studyList,
        selectedFilter, setSelectedFilter,
        selectedSort, setSelectedSort,
    }
}