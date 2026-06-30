import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAsgmtApi } from "./_api/GET";
import { IStudyBoard } from "@/components/types/study";

/**
 * @brief 과제 상세 컨트롤
 */

export const useControlAsgmtDetail = () => {
    const params = useParams();
    const [comment, setComment] = useState<string>(""); // 댓글 내용
    const [imageList, setImageList] = useState<File[]>([]); // 이미지 파일
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 미리보기 이미지 파일
    const [asgmtInfoData, setAsgmtInfoData] = useState<IStudyBoard>();
    
    const [deleteAsgmtOpen, setDeleteAsgmtOpen] = useState<boolean>(false); // 과제 삭제 확인 팝업

    // 특정 과제 상세 조회 api
    const {
        data: asgmtData,
        isLoading: asgmtLoading,
        isFetching: asgmtFetching
    } = useQuery({
        queryKey: ["studyAsgmt"],
        queryFn: () => getAsgmtApi.getAsgmtDetail(Number(params.asgmtCode)!),
        enabled: !!params.asgmtCode,
    });

    useEffect(() => {
        if(asgmtData) setAsgmtInfoData(asgmtData);
    }, [asgmtData]);

    return {
        comment, setComment,
        imageList, setImageList,
        previewImgList, setPreviewImgList,

        studyCode: params.studyCode,
        isLoading: asgmtLoading || asgmtFetching,
        asgmtInfoData,

        deleteAsgmtOpen, setDeleteAsgmtOpen,
    }
}