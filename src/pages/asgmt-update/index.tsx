import { useNavigate } from "react-router-dom";
import { CommonAsgmtForm } from "@/components/common/asgmt-form";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { useControlAsgmtUpdate } from "./index.control";
import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { CommonLoading } from "@/components/common/loading";

/**
 * @brief 과제 수정
 */

export const AsgmtUpdate = () => {
    const navigate = useNavigate();
    const controller = useControlAsgmtUpdate();

    return (
        <>
            {(!controller.asgmtLoading && controller.asgmtData) ? (
                <>
                    <CommonArrowHeader
                        moveUrl={`/${LinkEnum.STUDY}/${controller.asgmtData.studyCode}/${LinkEnum.ASGMT}/${controller.asgmtCode}`}
                        text="과제 수정하기"
                    />

                    <CommonAsgmtForm
                        title={controller.title}
                        setTitle={controller.setTitle}
                        content={controller.content}
                        setContent={controller.setContent}
                        linkName={controller.linkName}
                        setLinkName={controller.setLinkName}
                        linkUrl={controller.linkUrl}
                        setLinkUrl={controller.setLinkUrl}
                        imgList={controller.imgList}
                        setImgList={controller.setImgList}
                        previewImgList={controller.previewImgList}
                        setPreviewImgList={controller.setPreviewImgList}

                        className="pt-20!"
                        btnText="수정하기"
                        isLoading={controller.updateLoading}
                        onClick={controller.onAsgmtUpdate}
                    />
                </>
            ) : (
                <CommonLoading />
            )}

            <CommonConfirmModal
                open={controller.updateOpen}
                setOpen={controller.setUpdateOpen}
                title="과제가 수정되었습니다!"
                content="수정된 과제로 이동하시겠습니까?"
                cancelTitle="계속 수정하기"
                onCancel={controller.onFetchAsgmt}
                okTitle="과제로 이동"
                onOk={() => navigate(`/${LinkEnum.STUDY}/${controller.asgmtData.studyCode}/${LinkEnum.ASGMT}/${controller.asgmtData.code}`)}
            />
        </>
    )
}