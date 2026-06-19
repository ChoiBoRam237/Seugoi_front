import { CommonModal } from "@/components/molecules/modal";
import type { IModal } from "@/components/types/modal";
import { GenerateModalCircle, GenerateModalContainer, GenerateModalImg, GenerateModalRectangle } from "./indexStyles";
import personImg from "@/assets/person.svg";

/**
 * @brief 스터디 생성 모달 컴포넌트
 */

const circleList = [
    { bgColor: "#FC53FF", top: 12, left: -70 },
    { bgColor: "#00FFC2", top: 12, left: 138 },
    { bgColor: "#5BFF57", top: 71, left: -89 },
    { bgColor: "#FFD600", top: 71, left: 111 },
    { bgColor: "#57A4FF", top: 128, left: -53 },
    { bgColor: "#FF6363", top: 128, left: 136 },
];

const rectangleList = [
    { bgColor: "#FFD600", top: 42, left: -45, rotate: 332.15 },
    { bgColor: "#FC53FF", top: 42, left: 165, rotate: 220.25 },
    { bgColor: "#FF6363", top: 86, left: -31, rotate: 207.85 },
    { bgColor: "#57A4FF", top: 86, left: 158, rotate: 332.15 },
];

export const GenerateModal = (props: IModal) => {
    return (
        <CommonModal
            open={props.open}
            setOpen={props.setOpen}
            title="스터디가 생성되었습니다!"
            btnTitle="스터디로 이동"
            children={
                <GenerateModalContainer>
                    <GenerateModalImg $src={personImg} />

                    {/* circle */}
                    {circleList.map((circle, index) => (
                        <GenerateModalCircle
                            key={index}
                            $bgColor={circle.bgColor}
                            $top={circle.top}
                            $left={circle.left}
                        />
                    ))}

                    {/* rectangle */}
                    {rectangleList.map((rectangle, index) => (
                        <GenerateModalRectangle
                            key={index}
                            $bgColor={rectangle.bgColor}
                            $top={rectangle.top}
                            $left={rectangle.left}
                            $rotate={rectangle.rotate}
                        />
                    ))}
                </GenerateModalContainer>
            }
            onClick={props.onClick}
        />
    )
}