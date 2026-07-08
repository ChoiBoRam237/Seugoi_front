import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { IStudy } from "@/components/types/study";
import { IQuote } from "@/components/types/quote";
import { getHomeApi } from "../../_api/GET";

/**
 * @brief 스터디 컨트롤
 */

export const useControlStudy = () => {
    const [trendStudyList, setTrendStudyList] = useState<IStudy[]>([]);
    const [todayQuote, setTodayQuote] = useState<IQuote>();
    const [studyingList, setStudyingList] = useState<IStudy[]>([]);

    // 현재 진행 중인 스터디 조회 api
    const {
        data: studyingData,
        isLoading: studyingLoading,
        isFetching: studyingFetching
    } = useQuery({
        queryKey: ["studying"],
        queryFn: () => getHomeApi.getStudying()
    });

    // 요즘 뜨고있는 스터디 조회 api
    const {
        data: trendStudyData,
        isLoading: trendStudyLoading,
        isFetching: trendStudyFetching
    } = useQuery({
        queryKey: ["trendStudy"],
        queryFn: () => getHomeApi.getStudyTrend()
    });

    // 오늘의 명언 조회 api
    const {
        data: quoteData,
        isLoading: quoteLoading,
        isFetching: quoteFetching
    } = useQuery({
        queryKey: ["todayQuote"],
        queryFn: () => getHomeApi.getTodayQuote()
    });

    // 요즘 뜨고있는 스터디 조회 Fetch
    const onTrendStudyFetch = () => {
        queryClient.invalidateQueries({
            queryKey: ["trendStudy"]
        });
    }

    useEffect(() => {
        if (studyingData) setStudyingList(studyingData);
    }, [studyingData]);

    useEffect(() => {
        if (trendStudyData) setTrendStudyList(trendStudyData);
    }, [trendStudyData]);

    useEffect(() => {
        if (quoteData) setTodayQuote(quoteData);
    }, [quoteData]);

    return {
        isLoading: (studyingLoading || studyingFetching) || (trendStudyLoading || trendStudyFetching) || (quoteLoading || quoteFetching),
        studyingList,
        trendStudyList, onTrendStudyFetch,
        todayQuote,
    }
}