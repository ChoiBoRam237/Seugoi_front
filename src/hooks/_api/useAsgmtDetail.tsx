import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { commonApi } from "@/util/_api";
import { IStudyBoard } from "@/components/types/study";

/**
 * @brief 특정 과제 상세 조회 API hook
 */

interface Props {
    asgmtCode: number;
}

export const useAsgmtDetail = (props: Props) => {
    const [asgmtData, setAsgmtData] = useState<IStudyBoard>();

    // 특정 과제 상세 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["asgmtDetail"],
        queryFn: () => commonApi.getAsgmtDetail(props.asgmtCode),
        enabled: !!props.asgmtCode
    });

    const onFetchAsgmt = () => {
        queryClient.invalidateQueries({
            queryKey: ["asgmtDetail"]
        });
    }

    useEffect(() => {
        if (data) setAsgmtData(data);
    }, [data]);

    return {
        asgmtLoading: isLoading, isFetching,
        asgmtData,
        onFetchAsgmt,
    }
}