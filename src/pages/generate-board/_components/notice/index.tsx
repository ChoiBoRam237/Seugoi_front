import { useNavigate } from "react-router-dom";
import { CommonModal } from "@/components/molecules/modal";
import { CommonNoticeForm } from "@/components/common/notice-form";
import { LinkEnum } from "@/meta/link";
import { BoardProps } from "../..";
import { useControlNotice } from "./index.control";

/**
 * @brief 공지 추가
 */

export const Notice = (props: BoardProps) => {
    const navigate = useNavigate();
    const controller = useControlNotice();

    return (
        <>
            <CommonNoticeForm
                title={controller.title}
                setTitle={controller.setTitle}
                content={controller.content}
                setContent={controller.setContent}

                btnText="공지 추가하기"
                isLoading={controller.isLoading}
                onClick={() => controller.onGenerate(Number(props.studyCode))}
            />

            <CommonModal
                open={controller.successOpen}
                setOpen={controller.setSuccessOpen}
                title="공지가 생성되었습니다!"
                btnTitle="스터디로 이동"
                onClick={() => {
                    navigate(`/${LinkEnum.STUDY}/${props.studyCode}`, {
                        state: { status: "assignment" }
                    });
                }}
            />
        </>
    )
}