import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { generateStudyPostApi } from "./_api/POST";
import { cookie } from "@/util/cookies";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 스터디 생성 컨트롤
 */

export const useControlGenerateStudy = () => {
    const navigate = useNavigate();
    const userId = cookie.getCookie("user").userId;
    const [status, setStatus] = useState<string>("info"); // 정보: info / 기간: period / 내용: content
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

    const handleCategoryChange = (value: string, index: number) => {
        const formatted = (value.length === 0 || value === '#') // 값이 없거나, #만 있을 경우
            ? ''
            : value.startsWith("#")
                ? value
                : `# ${value}`;
        
        setCategories(prev => prev.map((item, i) => (i === index ? formatted : item)));
    };

    // 필수로 작성해야하는 데이터 모두 작성했으면 true, 아니면 false
    const isDataCheck = () => {
        return bgFile && studyName !== '' && peopleCount !== '';
    }

    // 스터디 생성 api
    const postGenerateStudy = useMutation({
        mutationFn: async () => {
            const formData = new FormData();
            formData.append("userId", userId); // 유저 아이디
            formData.append("studyName", studyName); // 스터디 이름
            categories.filter(item => item !== '').forEach(category => formData.append("categories", category)); // 카테고리
            formData.append("peopleCount", peopleCount); // 모집 인원
            endPeriod !== "" && formData.append("endPeriod", endPeriod); // 스터디 종료 기간
            formData.append("studyTitle", studyTitle); // 스터디 제목
            formData.append("summary", summary); // 간단 요약
            introduction.filter(item => item !== '').forEach(intro => formData.append("introduction", intro)); // 소개글
            formData.append("description", description); // 설명글
            recommend.filter(item => item !== '').forEach(recom => formData.append("recommend", recom)); // 추천글
            formData.append("bgImageUrl", bgFile); // 배경 이미지
            dDay !== null && formData.append("dday", dDay.toString()); // 디데이
            return await generateStudyPostApi.postGenerateStudy(formData);
        },
        onSuccess: (data) => {
            navigate(`/${LinkEnum.STUDY}/${data.id}`);
        },
        onError: (error: AxiosError) => {
            console.error("스터디 생성 에러 : ", error);
        }
    });
    const onGenerateStudy = () => {
        postGenerateStudy.mutate();
    }

    return {
        status, setStatus,
        bgFile, setBgFile,
        previewBgFile, setPreviewBgFile,
        studyName, setStudyName,
        categories, handleCategoryChange,
        peopleCount, setPeopleCount,

        endPeriod, setEndPeriod,
        dDay, setDDay,

        studyTitle, setStudyTitle,
        summary, setSummary,
        introduction, setIntroduction,
        description, setDescription,
        recommend, setRecommend,

        isDataCheck, onGenerateStudy,
    }
}