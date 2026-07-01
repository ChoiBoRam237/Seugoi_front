import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteAsgmtApi } from "../../_api/DELETE";
import { queryClient } from "@/queryClient";
import { AxiosError } from "axios";

/**
 * @brief 과제 댓글 컨트롤
 */

export const useControlComment = () => {
    const [overflowMenuOpen, setOverflowMenuOpen] = useState<boolean>(false);
    const [deleteAsgmtCmtOpen, setDeleteAsgmtCmtOpen] = useState<boolean>(false); // 댓글 삭제 확인

    const [imgViewOpen, setImgViewOpen] = useState<boolean>(false); // 이미지 보기 모달
    const [imgViewStartIndex, setImgViewStartIndex] = useState<number>(0); // 이미지 시작 인덱스

    // 과제 댓글 삭제 api
    const deleteAsgmtCmt = useMutation({
        mutationFn: (asgmtCmtCode: number) => deleteAsgmtApi.deleteAsgmtCmt(asgmtCmtCode),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["asgmtComment"] });
        },
        onError: (error: AxiosError) => {
            console.error("과제 댓글 삭제 에러 : ", error);
        },
    });

    const onDeleteAsgmtCmt = (asgmtCmtCode: number) => {
        deleteAsgmtCmt.mutate(asgmtCmtCode);
    }

    return {
        overflowMenuOpen, setOverflowMenuOpen,
        deleteAsgmtCmtOpen, setDeleteAsgmtCmtOpen,

        imgViewOpen, setImgViewOpen,
        imgViewStartIndex, setImgViewStartIndex,

        onDeleteAsgmtCmt,
    }
}