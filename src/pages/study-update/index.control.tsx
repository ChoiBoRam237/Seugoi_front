import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { patchStudyUpdateApi } from "./_api/PATCH";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useStudyDetail } from "@/hooks/_api/useStudyDetail";
import { BASE_URL } from "@/util/api";

/**
 * @brief 스터디 수정 컨트롤
 */

export const useControlStudyUpdate = () => {
    const params = useParams();
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

    const [updateOpen, setUpdateOpen] = useState<boolean>(false); // 스터디 수정 모달 오픈

    // 특정 스터디 상세 조회 hook
    const {
        studyDetailLoading,
        studyData,
        onFetchStudyDetail,
    } = useStudyDetail({ studyCode: params.studyCode });

    // 스터디 수정 api
    const patchStudyUpdate = useMutation({
        mutationFn: () => {
            const formData = new FormData();
            formData.append("studyName", studyName); // 스터디 이름
            categories.filter(item => item !== "").forEach(category => formData.append("categories", category.replace(/^#\s+/, "#"))); // 카테고리
            formData.append("peopleCount", peopleCount); // 모집 인원
            formData.append("endPeriod", endPeriod); // 스터디 종료 기간
            formData.append("studyTitle", studyTitle); // 스터디 제목
            formData.append("summary", summary); // 간단 요약
            introduction.filter(item => item !== "").forEach(intro => formData.append("introduction", intro)); // 소개글
            formData.append("description", description); // 설명글
            recommend.filter(item => item !== "").forEach(recom => formData.append("recommend", recom)); // 추천글
            formData.append("bgImageUrl", bgFile); // 배경 이미지
            formData.append("dday", dDay.toString()); // 디데이
            return patchStudyUpdateApi.patchStudyUpdate(Number(params.studyCode!), formData);
        },
        onSuccess: () => {
            setUpdateOpen(true);
        },
        onError: (error: AxiosError) => {
            console.error("스터디 수정 에러 : ", error);
        }
    });

    const onStudyUpdate = () => {
        patchStudyUpdate.mutate();
    }

    useEffect(() => {
        if (studyData) {
            setPreviewBgFile(`${BASE_URL}${studyData.bgImageUrl}`);
            setStudyName(studyData.studyName);
            setCategories([...studyData.categories, ...Array(Math.max(0, 3 - studyData.categories.length)).fill("")]);
            setPeopleCount(studyData.peopleCount);
            setEndPeriod(studyData.endPeriod);
            setDDay(studyData.dDay);
            setStudyTitle(studyData.studyTitle);
            setSummary(studyData.summary);
            setIntroduction([...studyData.introduction, ...Array(Math.max(0, 3 - studyData.introduction.length)).fill("")]);
            setDescription(studyData.description);
            setRecommend([...studyData.recommend, ...Array(Math.max(0, 3 - studyData.recommend.length)).fill("")]);
        }
    }, [studyData]);

    return {
        studyCode: params.studyCode,
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

        updateLoading: patchStudyUpdate.isPending,
        updateOpen, setUpdateOpen,
        onStudyUpdate,

        studyDetailLoading,
        onFetchStudyDetail,
    }
}