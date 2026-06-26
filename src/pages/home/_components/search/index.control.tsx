import { useEffect, useState } from 'react';
import { SearchProps } from './index';
import { IStudy } from '@/components/types/study';
import { useQuery } from '@tanstack/react-query';
import { getHomeApi } from '../../_api/GET';
import { queryClient } from '@/queryClient';

/**
 * @brief 검색 컨트롤
 */

export const useControlSearch = (props: SearchProps) => {
    const [latestStudyList, setLatestStudyList] = useState<IStudy[]>([]); // 최근 조회한 스터디 데이터
    const [searchStudyList, setSearchStudyList] = useState<IStudy[]>([]); // 검색된 스터디 데이터

    // 최근 조회한 스터디 api
    const { 
        data: latestStudyData, 
        isLoading: viewLoading, 
        isFetching: viewFetching 
    } = useQuery({
        queryKey: ["studyView"],
        queryFn: () => getHomeApi.getStudyView(),
        enabled: props.keyword === ""
    });

    // 스터디 검색 api
    const {
        data: searchStudyData,
        isLoading: searchLoading,
        isFetching: searchFetching
    } = useQuery({
        queryKey: ["studySearch", props.keyword],
        queryFn: () => getHomeApi.getStudySearch(props.keyword),
        enabled: props.keyword !== ""
    });

    // 최근 조회한 스터디 onFetch
    const onFetchLatestStudy = () => {
        queryClient.invalidateQueries({
            queryKey: ["studyView"]
        });
    }

    // 스터디 검색 onFetch
    const onFetchSearchStudy = () => {
        queryClient.invalidateQueries({
            queryKey: ["studySearch", props.keyword]
        });
    }

    useEffect(() => {
        if (latestStudyData) setLatestStudyList(latestStudyData);
    }, [latestStudyData]);

    useEffect(() => {
        if (searchStudyData) setSearchStudyList(searchStudyData);
    }, [searchStudyData]);

    return {
        isLoading: viewLoading || viewFetching,
        latestStudyList,
        onFetchLatestStudy,

        isSearchLoading: searchLoading || searchFetching,
        searchStudyList,
        onFetchSearchStudy,
    }
}