import { useEffect } from "react";

/**
 * @brief 페이지 상단으로 올리는 hook
 */

interface Props {
    item?: any;
}

export const useScrollup = ({ item }: Props) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [item]);

    return null;
};
