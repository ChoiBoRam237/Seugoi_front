import { useState } from "react";
import type { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { postStudyGenerateApi } from "./_api/POST";

/**
 * @brief 스터디 생성 컨트롤
 */

export const useControlStudyGenerate = () => {
    const [bgFile, setBgFile] = useState<File>(); // 대표 이미지
    const [previewBgFile, setPreviewBgFile] = useState<string>(""); // 이미지 미리보기
    const [studyName, setStudyName] = useState<string>(""); // 스터디 이름
    const [categories, setCategories] = useState<string[]>(["", "", ""]); // 카테고리
    const [peopleCount, setPeopleCount] = useState<string>(""); // 모집 인원

    const [endPeriod, setEndPeriod] = useState<string>(""); // 종료 기간
    const [dDay, setDDay] = useState<number | null>(null); // 종료 기간 디데이

    const [studyTitle, setStudyTitle] = useState<string>(""); // 스터디 제목
    const [summary, setSummary] = useState<string>(""); // 간단 요약
    const [introduction, setIntroduction] = useState<string[]>(["", "", ""]); // 스터디 소개
    const [description, setDescription] = useState<string>(""); // 설명글
    const [recommend, setRecommend] = useState<string[]>(["", "", ""]); // 추천글

    const [studyCode, setStudyCode] = useState<number | null>(null); // 생성된 스터디 아이디
    const [generateOpen, setGenerateOpen] = useState<boolean>(false); // 스터디 생성 모달 오픈

    // 스터디 생성 api
    const postStudyGenerate = useMutation({
        mutationFn: async () => {
            const formData = new FormData();
            formData.append("studyName", studyName); // 스터디 이름
            categories.filter(item => item !== "").forEach(category => formData.append("categories", category.replace(/^#\s+/, "#"))); // 카테고리
            formData.append("peopleCount", peopleCount); // 모집 인원
            endPeriod !== "" && formData.append("endPeriod", endPeriod); // 스터디 종료 기간
            studyTitle !== "" && formData.append("studyTitle", studyTitle); // 스터디 제목
            summary !== "" && formData.append("summary", summary); // 간단 요약
            introduction.filter(item => item !== "").forEach(intro => formData.append("introduction", intro)); // 소개글
            description !== "" && formData.append("description", description); // 설명글
            recommend.filter(item => item !== "").forEach(recom => formData.append("recommend", recom)); // 추천글
            formData.append("bgImageUrl", bgFile); // 배경 이미지
            dDay !== null && formData.append("dday", dDay.toString()); // 디데이
            return await postStudyGenerateApi.postStudyGenerate(formData);
        },
        onSuccess: (data) => {
            setStudyCode(data.id);
            setGenerateOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("스터디 생성 에러 : ", error);
        }
    });
    const onStudyGenerate = () => {
        postStudyGenerate.mutate();
    }

    return {
        bgFile, setBgFile,
        previewBgFile, setPreviewBgFile,
        studyName, setStudyName,
        categories, setCategories,
        peopleCount, setPeopleCount,

        endPeriod, setEndPeriod,
        dDay, setDDay,

        studyTitle, setStudyTitle,
        summary, setSummary,
        introduction, setIntroduction,
        description, setDescription,
        recommend, setRecommend,

        studyCode,
        generateOpen, setGenerateOpen,

        isLoading: postStudyGenerate.isPending,
        onStudyGenerate,
    }
}