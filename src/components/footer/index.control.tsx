import { useLocation, useNavigate } from "react-router-dom";

/**
 * @brief 푸터 컴포넌트 컨트롤
 */

export const useControlFooter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const getBgColor = (link: string) => {
        let color = "white";
        if (pathname === link) color = "#81FF90";
        else color = "white";
        return color;
    }

    const onClick = (link: string) => {
        navigate(link);
    }

    return {
        getBgColor,
        onClick,
    }
}