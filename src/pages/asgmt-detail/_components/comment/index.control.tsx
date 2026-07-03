import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { deleteAsgmtApi } from "../../_api/DELETE";
import { CommentProps } from ".";
import { BASE_URL } from "@/util/api";
import { patchAsgmtDetail } from "../../_api/PATCH";

/**
 * @brief 과제 댓글 컨트롤
 */

export const useControlComment = (props: CommentProps) => {
    const [value, setValue] = useState<string>(""); // 댓글 내용
    const [imgList, setImgList] = useState<File[]>([]); // 새로 추가할 이미지
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 기존 이미지
    const [removeImgCodeList, setRemoveImgCodeList] = useState<number[]>([]); // 삭제할 이미지 코드
    const [status, setStatus] = useState<"read" | "update">("read"); // 읽기 전용 / 수정

    const [overflowMenuOpen, setOverflowMenuOpen] = useState<boolean>(false);
    const [deleteAsgmtCmtOpen, setDeleteAsgmtCmtOpen] = useState<boolean>(false); // 댓글 삭제 확인
    const [updateOpen, setUpdateOpen] = useState<boolean>(false); // 수정 완료 팝업

    const [imgViewOpen, setImgViewOpen] = useState<boolean>(false); // 이미지 보기 모달
    const [imgViewStartIndex, setImgViewStartIndex] = useState<number>(0); // 이미지 시작 인덱스

    // 과제 댓글 수정 api
    const updateAsgmtCmt = useMutation({
        mutationFn: () => {
            const formData = new FormData();
            formData.append("comment", value);
            if (imgList.length > 0) imgList.forEach(img => formData.append("imageList", img));
            if (removeImgCodeList.length > 0) removeImgCodeList.forEach(code => formData.append("removeImgCodeList", code.toString()));
            return patchAsgmtDetail.patchAsgmtCmt(props.data.code, formData);
        },
        onSuccess: () => {
            setUpdateOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("과제 댓글 수정 에러 : ", error);
        }
    });
    
    // 과제 댓글 삭제 api
    const deleteAsgmtCmt = useMutation({
        mutationFn: () => deleteAsgmtApi.deleteAsgmtCmt(props.data.code),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["asgmtComment"] });
        },
        onError: (error: AxiosError) => {
            console.error("과제 댓글 삭제 에러 : ", error);
        },
    });

    const onUpdateAsgmtCmt = () => {
        updateAsgmtCmt.mutate();
    }

    const onDeleteAsgmtCmt = () => {
        deleteAsgmtCmt.mutate();
    }

    const onFetch = () => {
        queryClient.invalidateQueries({
            queryKey: ["asgmtComment"]
        });
    }

    useEffect(() => {
        if (props.data) {
            setValue(props.data.comment);
            setPreviewImgList(
                props.data.imgList.map(item => `${BASE_URL}${item.folderName}${item.imgUrl}`)
            );
        }
    }, [props.data]);

    useEffect(() => {
        if (!props.data) return;

        const removeCodeList = props.data.imgList
            .filter(origin => !previewImgList.includes(`${BASE_URL}${origin.folderName}${origin.imgUrl}`))
            .map(item => item.code);

        setRemoveImgCodeList(removeCodeList);
    }, [props.data.imgList, previewImgList]);

    return {
        value, setValue,
        imgList, setImgList,
        previewImgList, setPreviewImgList,
        removeImgCodeList, setRemoveImgCodeList,
        status, setStatus,

        overflowMenuOpen, setOverflowMenuOpen,
        deleteAsgmtCmtOpen, setDeleteAsgmtCmtOpen,
        updateOpen, setUpdateOpen,

        imgViewOpen, setImgViewOpen,
        imgViewStartIndex, setImgViewStartIndex,

        updateLoading: updateAsgmtCmt.isPending,
        onUpdateAsgmtCmt,
        onDeleteAsgmtCmt,
        onFetch,
    }
}