import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";
import { GenerateModal } from "./_components/modal";
import { CommonStudyForm } from "@/components/common/study-form";
import { useControlStudyGenerate } from "./index.control";

/**
 * @brief 스터디 생성
 */

export const StudyGenerate = () => {
    const navigate = useNavigate();
    const controller = useControlStudyGenerate();

    return (
        <>
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

                btnText="스터디 만들기"
                isLoading={controller.isLoading}
                onClick={controller.onStudyGenerate}
            />

            <GenerateModal
                open={controller.generateOpen && controller.studyCode !== null}
                setOpen={controller.setGenerateOpen}
                onClick={() => navigate(`/${LinkEnum.STUDY}/${controller.studyCode}`)}
            />
        </>
    )
}