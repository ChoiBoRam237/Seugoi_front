import { TabsProps } from "antd";
import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { LayoutInnerWrapper } from "@/components/layout";
import { Notice } from "./_components/notice";
import { Assignment } from "./_components/assignment";
import { useControlGenerateBoard } from "./index.control";
import { BoardTabs } from "./indexStyles";

/**
 * @brief 과제/공지 생성
 */

export interface BoardProps {
    studyCode: string;
}

export const GenerateBoard = () => {
    const controller = useControlGenerateBoard();

    const items: TabsProps["items"] = [
        {
            key: "asgmt",
            label: "과제 추가",
            children: <Assignment studyCode={controller.studyCode} />
        },
        {
            key: "notice",
            label: "공지 추가",
            children: <Notice studyCode={controller.studyCode} />
        }
    ];

    return (
        <LayoutInnerWrapper className="arrow">
            <CommonArrowHeader
                moveUrl={`/${LinkEnum.STUDY}/${controller.studyCode}`}
                urlState={{ state: "assignment" }}
                text="과제/공지 추가"
            />
            
            <BoardTabs
                items={items}
                defaultActiveKey="asgmt"
            />
        </LayoutInnerWrapper>
    )
}