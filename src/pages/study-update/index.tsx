import { useNavigate } from "react-router-dom";
import { CommonStudyForm } from "@/components/common/study-form";
import { useControlStudyUpdate } from "./index.control";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";
import { CommonLoading } from "@/components/common/loading";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 스터디 수정
 */

export const StudyUpdate = () => {
    const navigate = useNavigate();
    const controller = useControlStudyUpdate();

    return (
        <>
            {!controller.studyDetailLoading ? (
                <CommonStudyForm
                    bgFile={controller.bgFile}
                    setBgFile={controller.setBgFile}
                    previewBgFile={controller.previewBgFile}
                    setPreviewBgFile={controller.setPreviewBgFile}
                    studyName={controller.studyName}
                    setStudyName={controller.setStudyName}
                    categories={controller.categories}
                    setCategories={controller.setCategories}
                    peopleCount={controller.peopleCount}
                    setPeopleCount={controller.setPeopleCount}

                    endPeriod={controller.endPeriod}
                    setEndPeriod={controller.setEndPeriod}
                    dDay={controller.dDay}
                    setDDay={controller.setDDay}

                    studyTitle={controller.studyTitle}
                    setStudyTitle={controller.setStudyTitle}
                    summary={controller.summary}
                    setSummary={controller.setSummary}
                    introduction={controller.introduction}
                    setIntroduction={controller.setIntroduction}
                    description={controller.description}
                    setDescription={controller.setDescription}
                    recommend={controller.recommend}
                    setRecommend={controller.setRecommend}

                    btnText="스터디 수정하기"
                    isLoading={controller.updateLoading}
                    onClick={controller.onStudyUpdate}
                />
            ) : (
                <CommonLoading />
            )}

            <CommonConfirmModal
                open={controller.updateOpen}
                setOpen={controller.setUpdateOpen}
                title="스터디가 수정되었습니다."
                content="수정한 스터디로 이동하시겠습니까?"
                okTitle="스터디로 이동"
                onOk={() => navigate(`/${LinkEnum.STUDY}/${controller.studyCode}`)}
                cancelTitle="계속 수정하기"
                onCancel={controller.onFetchStudyDetail}
            />
        </>
    )
}