import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IStudyBoard } from "@/components/types/study";
import { queryClient } from "@/queryClient";
import { getAsgmtApi } from "./_api/GET";
import { postAsgmtApi } from "./_api/POST";
import { IAsgmtComment } from "./index.type";
import { deleteAsgmtApi } from "./_api/DELETE";
import { LinkEnum } from "@/meta/link";
import { useAsgmtDetail } from "@/hooks/_api/useAsgmtDetail";

/**
 * @brief 과제 상세 컨트롤
 */

export const useControlAsgmtDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [comment, setComment] = useState<string>(""); // 댓글 내용
    const [imageList, setImageList] = useState<File[]>([]); // 이미지 파일
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 미리보기 이미지 파일
    const [asgmtComment, setAsgmtComment] = useState<IAsgmtComment>({
        submitted: false,
        comments: [],
    }); // 댓글 목록
    
    const [deleteAsgmtOpen, setDeleteAsgmtOpen] = useState<boolean>(false); // 과제 삭제 확인 팝업

    // 특정 과제 상세 조회 hook
    const {
        asgmtLoading,
        asgmtData
    } = useAsgmtDetail({ asgmtCode: Number(params.asgmtCode) });

    // 과제 댓글 조회 api
    const {
        data: asgmtCommentData,
        isLoading: asgmtCommentLoading,
        isFetching: asgmtCommentFetching
    } = useQuery({
        queryKey: ["asgmtComment"],
        queryFn: () => getAsgmtApi.getAsgmtComment(Number(params.asgmtCode)!),
        enabled: !!params.asgmtCode,
    });

    // 과제 삭제 api
    const deleteAsgmt = useMutation({
        mutationFn: () => deleteAsgmtApi.deleteAsgmt(Number(params.asgmtCode)!),
        onSuccess: () => {
            navigate(`/${LinkEnum.STUDY}/${params.studyCode}`, {
                state: { status: "assignment" }
            });
        },
        onError: (error: AxiosError) => {
            console.error("과제 삭제 에러 : ", error);
        },
    });

    // 과제 댓글 생성 api
    const postAsgmtComment = useMutation({
        mutationFn: () => {
            const formData = new FormData();
            formData.append("comment", comment);
            imageList.forEach(image => formData.append("imageList", image));
            return postAsgmtApi.postAsgmtComment(Number(params.asgmtCode)!, formData);
        },
        onSuccess: () => {
            setComment("");
            setImageList([]);
            setPreviewImgList([]);
            queryClient.invalidateQueries({ queryKey: ["asgmtComment"] });
        },
        onError: (error: AxiosError) => {
            console.error("과제 댓글 생성 에러 : ", error);
        },
    });

    // 과제 삭제
    const onDeleteAsgmt = () => {
        deleteAsgmt.mutate();
    }

    // 과제 댓글 생성
    const onGenerateAsgmtComment = () => {
        postAsgmtComment.mutate();
    }

    useEffect(() => {
        if (asgmtCommentData) setAsgmtComment(asgmtCommentData);
    }, [asgmtCommentData]);

    return {
        comment, setComment,
        imageList, setImageList,
        previewImgList, setPreviewImgList,

        studyCode: params.studyCode,
        isLoading: asgmtLoading || (asgmtCommentLoading || asgmtCommentFetching),
        asgmtData,
        asgmtComment,

        deleteAsgmtOpen, setDeleteAsgmtOpen,
        onDeleteAsgmt,

        isGenerateLoading: postAsgmtComment.isPending,
        onGenerateAsgmtComment,

    }
}