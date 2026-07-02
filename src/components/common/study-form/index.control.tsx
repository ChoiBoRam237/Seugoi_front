import { useState } from "react";
import { useScrollup } from "@/hooks/useScrollUp";

/**
 * @brief 스터디 폼 컴포넌트 컨트롤
 */

export const useControlStudyForm = () => {
    const [status, setStatus] = useState<string>("info"); // 정보: info / 기간: period / 내용: content
    
    useScrollup({ item: status });

    return {
        status, setStatus,
    }
}