import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { LinkEnum } from "@/meta/link";
import { GenerateContainer, GenerateHeader, GenerateHeaderNumber, GenerateHeaderNumberWrapper } from "./indexStyles";
import { Info } from "./_components/info";
import { useControlStudyGenerate } from "./index.control";
import { Content } from "./_components/content";
import { Period } from "./_components/period";
import { GenerateModal } from "./_components/modal";

/**
 * @brief 스터디 생성
 */

export const StudyGenerate = () => {
    const navigate = useNavigate();
    const controller = useControlStudyGenerate();

    const isNumberActive = (status: string) => {
        return controller.status === status ? 'active' : '';
    }

    const onClickNumber = (status: string) => {
        controller.setStatus(status);
    }

    return (
        <GenerateContainer>
            <GenerateHeader>
                <GenerateHeaderNumberWrapper>
                    <GenerateHeaderNumber
                        className={`${isNumberActive("info")}`}
                        onClick={() => onClickNumber("info")}
                    >1</GenerateHeaderNumber>

                    <GenerateHeaderNumber
                        disabled={!controller.isDataCheck()}
                        className={`${isNumberActive("period")} ${controller.isDataCheck() ? '' : 'disabled'}`}
                        onClick={() => controller.isDataCheck() && onClickNumber("period")}
                    >2</GenerateHeaderNumber>

                    <GenerateHeaderNumber
                        disabled={!controller.isDataCheck()}
                        className={`${isNumberActive("content")} ${controller.isDataCheck() ? '' : 'disabled'}`}
                        onClick={() => controller.isDataCheck() && onClickNumber("content")}
                    >3</GenerateHeaderNumber>
                </GenerateHeaderNumberWrapper>

                <button onClick={() => navigate(`/${LinkEnum.HOME}`)}>
                    <TiHome size={25} color="#76778B" />
                </button>
            </GenerateHeader>

            {controller.status === 'info' ? (
                <Info
                    bgFile={controller.bgFile}
                    setBgFile={controller.setBgFile}
                    previewBgFile={controller.previewBgFile}
                    setPreviewBgFile={controller.setPreviewBgFile}
                    studyName={controller.studyName}
                    setStudyName={controller.setStudyName}
                    categories={controller.categories}
                    handleCategoryChange={controller.handleCategoryChange}
                    peopleCount={controller.peopleCount}
                    setPeopleCount={controller.setPeopleCount}
                    isDataCheck={!controller.isDataCheck()}
                    onNext={() => controller.setStatus("period")}
                />
            ) : controller.status === 'period' ? (
                <Period
                    endPeriod={controller.endPeriod}
                    setEndPeriod={controller.setEndPeriod}
                    dDay={controller.dDay}
                    setDDay={controller.setDDay}
                    isDataCheck={!controller.isDataCheck()}
                    onNext={() => controller.setStatus("content")}
                />
            ) : (
                <Content
                    bgImage={controller.previewBgFile}
                    studyName={controller.studyName}
                    categories={controller.categories}
                    peopleCount={controller.peopleCount}
                    dDay={controller.dDay}
                    
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
                    isDataCheck={!controller.isDataCheck()}

                    isLoading={controller.isLoading}
                    onStudyGenerate={controller.onStudyGenerate}
                />
            )}

            {(controller.generateOpen && controller.studyId !== null) && (
                <GenerateModal
                    open={controller.generateOpen}
                    setOpen={controller.setGenerateOpen}
                    onClick={() => navigate(`/${LinkEnum.STUDY}/${controller.studyId}`)}
                />
            )}
        </GenerateContainer>
    )
}