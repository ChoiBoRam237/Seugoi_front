import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IStudy } from "@/components/types/study";
import { getHomeApi } from "../../_api/GET";
import { queryClient } from "@/queryClient";
import { IQuote } from "../../index.type";

/**
 * @brief 스터디 컨트롤
 */

export const useControlStudy = () => {
    const [trendStudyList, setTrendStudyList] = useState<IStudy[]>([]);
    const [todayQuote, setTodayQuote] = useState<IQuote>();

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
        if (trendStudyData) setTrendStudyList(trendStudyData);
    }, [trendStudyData]);

    useEffect(() => {
        if (quoteData) setTodayQuote(quoteData);
    }, [quoteData]);

    return {
        isLoading: (trendStudyLoading || trendStudyFetching) || (quoteLoading || quoteFetching),
        trendStudyList, onTrendStudyFetch,
        todayQuote,
    }
}