import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { LinkEnum } from "@/meta/link";
import { GenerateContainer, GenerateHeader, GenerateHeaderNumber, GenerateHeaderNumberWrapper } from "./indexStyles";
import { Info } from "./_components/info";
import { useControlGenerateStudy } from "./index.control";

/**
 * @brief 스터디 생성
 */

export const GenerateStudy = () => {
    const navigate = useNavigate();
    const controller = useControlGenerateStudy();

    const isNumberActive = (status: string) => {
        return controller.status === status ? 'active' : '';
    }

    return (
        <GenerateContainer>
            <GenerateHeader>
                <GenerateHeaderNumberWrapper>
                    <GenerateHeaderNumber className={isNumberActive("info")}>1</GenerateHeaderNumber>
                    <GenerateHeaderNumber className={isNumberActive("period")}>2</GenerateHeaderNumber>
                    <GenerateHeaderNumber className={isNumberActive("content")}>3</GenerateHeaderNumber>
                </GenerateHeaderNumberWrapper>

                <button onClick={() => navigate(`/${LinkEnum.HOME}`)}>
                    <TiHome size={25} color="#76778B" />
                </button>
            </GenerateHeader>

            {controller.status === 'info' ? (
                <Info
                    bgFile={controller.bgFile}
                    setBgFile={controller.setBgFile}
                    studyName={controller.studyName}
                    setStudyName={controller.setStudyName}
                    categories={controller.categories}
                    handleCategoryChange={controller.handleCategoryChange}
                    peopleCount={controller.peopleCount}
                    setPeopleCount={controller.setPeopleCount}
                />
            ) : controller.status === 'period' ? (
                <></>
            ) : (
                <></>
            )}
        </GenerateContainer>
    )
}