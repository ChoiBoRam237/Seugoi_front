import { useEffect, useState } from "react"
import { SelectType } from "@/components/types/select"
import { sortData } from "@/components/common/sort/index.constants";
import { useQuery } from "@tanstack/react-query";
import { getMypageApi } from "../../_api/GET";
import { IStudy } from "@/components/types/study";

/**
 * @brief 찜한 스터디 컨트롤
 */

export const useControlMypageBookmarkStudy = () => {
    const [selectedSort, setSelectedSort] = useState<SelectType>(sortData[0]); // 정렬
    const [bookmarkList, setBookmarkList] = useState<IStudy[]>([]); // 스터디 목록

    // 찜한 스터디 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyBookmark", selectedSort.value],
        queryFn: () => getMypageApi.getBookmark(selectedSort.value),
    });

    useEffect(() => {
        if(data) setBookmarkList(data);
    }, [data]);

    return {
        isLoading: isLoading || isFetching,
        bookmarkList,
        selectedSort, setSelectedSort,
    }
}