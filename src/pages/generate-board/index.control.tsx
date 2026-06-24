import { useLocation, useParams } from "react-router-dom";

/**
 * @brief 과제/공지 생성 컨트롤
 */

export const useControlGenerateBoard = () => {
    const params = useParams();
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);

    return {
        studyCode: params.studyCode,
        type: urlParams.get("type"),
    }
}