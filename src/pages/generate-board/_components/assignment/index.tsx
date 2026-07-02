import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { CommonModal } from "@/components/molecules/modal";
import { CommonAsgmtForm } from "@/components/common/asgmt-form";
import { BoardProps } from "../..";
import { useControlAssignment } from "./index.control";

/**
 * @brief 과제 추가
 */

export const Assignment = (props: BoardProps) => {
    const navigate = useNavigate();
    const controller = useControlAssignment();

    return (
        <>
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

                className="bg-(--second-primary)!"
                btnText="과제 추가하기"
                isLoading={controller.isLoading}
                onClick={() => controller.onGenerate(Number(props.studyCode!))}
            />

            <CommonModal
                open={controller.successOpen}
                setOpen={controller.setSuccessOpen}
                title="과제가 생성되었습니다!"
                btnTitle="과제로 이동"
                onClick={() => navigate(`/${LinkEnum.STUDY}/${controller.successData.studyCode}/${LinkEnum.ASGMT}/${controller.successData.code}`)}
            /> 
        </>
    )
}