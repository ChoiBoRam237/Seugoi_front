import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/queryClient';
import { IStudy } from '@/components/types/study';
import { useLatestStudy } from '@/hooks/_api/useLatestStudy';
import { getHomeApi } from '../../_api/GET';
import { deleteHomeApi } from '../../_api/DELETE';
import { ISearchKeyword } from './index.type';
import { SearchProps } from './index';

/**
 * @brief 검색 컨트롤
 */

export const useControlSearch = (props: SearchProps) => {
    const [searchKeywordList, setSearchKeywordList] = useState<ISearchKeyword[]>([]); // 최근 검색어 데이터
    const [searchStudyList, setSearchStudyList] = useState<IStudy[]>([]); // 검색된 스터디 데이터
    const { latestLoading, latestStudyList, onFetchLatestStudy } = useLatestStudy({ enabled: props.keyword === "" });

    // 최근 검색어 조회 api
    const {
        data: searchKeywordData,
        isLoading: searchKeywordLoading,
        isFetching: searchKeywordFetching
    } = useQuery({
        queryKey: ["searchKeyword"],
        queryFn: () => getHomeApi.getSearchKeyword(),
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

    // 검색어 전체 삭제 api
    const deleteAllSearchKeyword = useMutation({
        mutationFn: () => deleteHomeApi.deleteAllSearchKeyword(),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["searchKeyword"]
            });
        },
        onError: (error: AxiosError) => {
            console.error("검색어 전체 삭제 에러 : ", error);
        }
    });

    // 검색어 삭제 api
    const deleteSearchKeyword = useMutation({
        mutationFn: (keywordCode: number) => deleteHomeApi.deleteSearchKeyword(keywordCode),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["searchKeyword"]
            });
        },
        onError: (error: AxiosError) => {
            console.error("검색어 삭제 에러 : ", error);
        }
    });

    // 스터디 검색 onFetch
    const onFetchSearchStudy = () => {
        queryClient.invalidateQueries({
            queryKey: ["studySearch", props.keyword]
        });
    }

    // 검색어 전체 삭제
    const onDeleteKeywordAll = () => {
        deleteAllSearchKeyword.mutate();
    }

    // 검색어 삭제
    const onDeleteKeyword = (keywordCode: number) => {
        deleteSearchKeyword.mutate(keywordCode);
    }

    // 최근 검색어 useEffect
    useEffect(() => {
        if(searchKeywordData) setSearchKeywordList(searchKeywordData);
    }, [searchKeywordData]);

    // 스터디 검색 useEffect
    useEffect(() => {
        if (searchStudyData) setSearchStudyList(searchStudyData);
    }, [searchStudyData]);

    return {
        isLoading: searchKeywordLoading || searchKeywordFetching || latestLoading,
        searchKeywordList, latestStudyList,
        onFetchLatestStudy,

        isSearchLoading: searchLoading || searchFetching,
        searchStudyList,
        onFetchSearchStudy,

        onDeleteKeywordAll,
        onDeleteKeyword,
    }
}