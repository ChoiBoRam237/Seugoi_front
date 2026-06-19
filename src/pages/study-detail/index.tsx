import { LinkEnum } from "@/meta/link";
import { CommonArrowHeader } from "@/components/common/header/arrow";
import { DetailContainer, DetailWrapper } from "./indexStyles";
import { CommonStudyInfoAndImage } from "@/components/common/study-info&image";
import { CommonButton } from "@/components/molecules/button";
import { CommonStudyIntro } from "@/components/common/study-intro";

/**
 * @brief 스터디 상세페이지
 */

export const StudyDetail = () => {
    return (
        <DetailContainer>
            <CommonArrowHeader moveUrl={`/${LinkEnum.HOME}`} />

            <CommonStudyInfoAndImage
                bgImage=""
                studyName="ddd"
                categories={["#dd"]}
                dDay={30}
            />

            <DetailWrapper>
                <CommonStudyIntro
                    readOnly={true}
                    studyTitle="와우"
                    peopleCount="10"
                    summary="dd\nfadf"
                    introduction={["ddd", "dfafa"]}
                    description="fdafda"
                    recommend={["aaa", "bbbbbb"]}
                />
                
                <CommonButton
                    bgColor="var(--primary)"
                    text="스터디 가입하기"
                    onClick={() => {}}
                />
            </DetailWrapper>
        </DetailContainer>
    )
}