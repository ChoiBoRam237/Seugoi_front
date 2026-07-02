import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { CommonLoading } from "@/components/common/loading";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { CommonNoticeForm } from "@/components/common/notice-form";
import { useControlNoticeUpdate } from "./index.control";

/**
 * @brief 공지 수정
 */

export const NoticeUpdate = () => {
    const navigate = useNavigate();
    const controller = useControlNoticeUpdate();

    return (
        <>
            <CommonArrowHeader
                moveUrl={`/${LinkEnum.STUDY}/${controller.studyCode}`}
                urlState={{ status: "assignment" }}
                text="공지 수정하기"
            />

            {!controller.isLoading ? (
                <CommonNoticeForm
                    title={controller.title}
                    setTitle={controller.setTitle}
                    content={controller.content}
                    setContent={controller.setContent}

                    btnText="수정하기"
                    isLoading={controller.updateLoading}
                    onClick={controller.onNoticeUpdate}
                />
            ) : (
                <CommonLoading />
            )}

            <CommonConfirmModal
                open={controller.updateOpen}
                setOpen={controller.setUpdateOpen}
                title="공지가 수정되었습니다!"
                content="스터디로 이동하시겠습니까?"
                cancelTitle="계속 수정하기"
                onCancel={controller.onFetch}
                okTitle="스터디로 이동"
                onOk={() => {
                    navigate(`/${LinkEnum.STUDY}/${controller.studyCode}`, {
                        state: { status: "assignment" }
                    });
                }}
            />
        </>
    )
}