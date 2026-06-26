import { useLocation, useNavigate } from "react-router-dom";

/**
 * @brief 메뉴바 컴포넌트 컨트롤
 */

export const useControlMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const getBgColor = (link: string) => {
        let color = "white";
        if (pathname.includes(link)) color = "var(--green-light)";
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