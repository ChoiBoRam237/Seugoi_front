import { useAsgmtDetail } from "@/hooks/_api/useAsgmtDetail";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchAsgmtUpdateApi } from "./_api/PATCH";
import { AxiosError } from "axios";
import { BASE_URL } from "@/util/api";

/**
 * @brief 과제 수정 컨트롤
 */

export const useControlAsgmtUpdate = () => {
    const params = useParams();
    const [title, setTitle] = useState<string>(""); // 제목
    const [content, setContent] = useState<string>(""); // 내용
    const [linkName, setLinkName] = useState<string>(""); // 링크 이름
    const [linkUrl, setLinkUrl] = useState<string>(""); // 링크 주소
    const [imgList, setImgList] = useState<File[]>([]); // 이미지 리스트
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 이미지 미리보기 리스트
    const [removeImgCodeList, setRemoveImgCodeList] = useState<number[]>([]); // 삭제할 이미지 코드
    const [updateOpen, setUpdateOpen] = useState<boolean>(false); // 성공 팝업

    // 특정 과제 상세 조회 hook
    const {
        asgmtLoading,
        asgmtData,
        onFetchAsgmt
    } = useAsgmtDetail({ asgmtCode: Number(params.asgmtCode) });

    // 과제 수정 api
    const patchAsgmtUpdate = useMutation({
        mutationFn: () => {
            const formData = new FormData();
            title !== "" && formData.append("title", title);
            content !== "" && formData.append("content", content);
            linkName !== "" && formData.append("linkName", linkName);
            linkUrl !== "" && formData.append("linkUrl", linkUrl);
            imgList.length > 0 && imgList.forEach(img => formData.append("imageList", img));
            removeImgCodeList.length > 0 && removeImgCodeList.forEach(code => formData.append("removeImgCodeList", code.toString()));
            return patchAsgmtUpdateApi.patchAsgmtUpdate(Number(params.asgmtCode), formData);
        },
        onSuccess: () => {
            setUpdateOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("과제 수정 에러 : ", error);
        }
    });

    const onAsgmtUpdate = () => {
        patchAsgmtUpdate.mutate();
    }

    useEffect(() => {
        if (!asgmtData) return;

        const removeCodeList = asgmtData.imgList
            .filter(origin => !previewImgList.includes(`${BASE_URL}${origin.imgUrl}`))
            .map(item => item.code);

        setRemoveImgCodeList(removeCodeList);
    }, [asgmtData, previewImgList]);


    useEffect(() => {
        if (asgmtData) {
            setTitle(asgmtData.title);
            setContent(asgmtData.content);
            setLinkName(asgmtData.linkName);
            setLinkUrl(asgmtData.linkUrl);
            setPreviewImgList(
                asgmtData.imgList.map(item => `${BASE_URL}${item.imgUrl}`)
            );
        }
    }, [asgmtData]);

    return {
        title, setTitle,
        content, setContent,
        linkName, setLinkName,
        linkUrl, setLinkUrl,
        imgList, setImgList,
        previewImgList, setPreviewImgList,
        updateOpen, setUpdateOpen,

        asgmtData,
        asgmtCode: params.asgmtCode,
        asgmtLoading,
        onFetchAsgmt,

        updateLoading: patchAsgmtUpdate.isPending,
        onAsgmtUpdate,
    }
}