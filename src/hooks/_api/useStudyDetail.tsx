import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { commonApi } from "@/util/_api";
import { IStudyDetail } from "@/components/types/study";
import { IUser } from "@/components/types/user";

/**
 * @brief 특정 스터디 상세 조회 API hook
 */

interface Props {
    studyCode: string;
}

export const useStudyDetail = (props: Props) => {
    const [studyData, setStudyData] = useState<IStudyDetail | null>(null); // 스터디 정보
    const [adminData, setAdminData] = useState<IUser | null>(null); // 관리자 정보
    const [owner, setIsAdmin] = useState<boolean>(false); // 관리자인지 아닌지

    // 특정 스터디 상세 조회 api
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["studyDetail"],
        queryFn: () => commonApi.getStudyDetail(Number(props.studyCode!)),
        enabled: !!props.studyCode
    });

    const onFetchStudyDetail = () => {
        queryClient.invalidateQueries({
            queryKey: ["studyDetail"]
        });
    }

    useEffect(() => {
        if (data) {
            setStudyData(data.study);
            setAdminData(data.admin);
            setIsAdmin(data.owner);
        }
    }, [data]);

    return {
        studyDetailLoading: isLoading || isFetching,
        studyData, adminData, owner,
        onFetchStudyDetail,
    }
}