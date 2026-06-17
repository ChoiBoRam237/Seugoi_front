import { useState } from "react";

/**
 * @brief 스터디 생성 컨트롤
 */

export const useControlGenerateStudy = () => {
    const [status, setStatus] = useState<string>("info"); // 정보: info / 기간: period / 내용: content
    const [bgFile, setBgFile] = useState<File>(); // 대표 이미지
    const [studyName, setStudyName] = useState<string>(""); // 스터디 이름
    const [categories, setCategories] = useState<string[]>(["", "", ""]); // 카테고리
    const [peopleCount, setPeopleCount] = useState<string>(""); // 인원

    const handleCategoryChange = (value: string, index: number) => {
        const formatted = (value.length === 0 || value === '#') // 값이 없거나, #만 있을 경우
            ? ''
            : value.startsWith("#")
                ? value
                : `#${value}`;
        
        setCategories(prev => prev.map((item, i) => (i === index ? formatted : item)));
    };

    return {
        status, setStatus,
        bgFile, setBgFile,
        studyName, setStudyName,
        categories, handleCategoryChange,
        peopleCount, setPeopleCount,
    }
}