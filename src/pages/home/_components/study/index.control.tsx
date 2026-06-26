import { useState } from "react";
import { sortData } from "@/components/common/sort/index.constants";
import { SelectType } from "@/components/types/select";

/**
 * @brief 스터디 컨트롤
 */

export const useControlStudy = () => {
    const [selectedSort, setSelectedSort] = useState<SelectType>(sortData[0]);

    return {
        selectedSort, setSelectedSort,
    }
}