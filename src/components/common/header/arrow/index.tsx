import { IoIosArrowBack } from "react-icons/io";
import { ArrowHeaderContainer, ArrowHeaderText, ArrowHeaderWrapper } from "./indexStyles";
import { useNavigate } from "react-router-dom";

/**
 * @brief 화살표 헤더 컴포넌트
 */

interface ArrowHeaderProps {
    moveUrl: string;
    text?: string;
}

export const CommonArrowHeader = (props: ArrowHeaderProps) => {
    const navigate = useNavigate();

    return (
        <ArrowHeaderContainer>
            <ArrowHeaderWrapper>
                <button onClick={() => navigate(props.moveUrl, { replace: true })}>
                    <IoIosArrowBack size={25} color="white" />
                </button>

                {props.text && (
                    <ArrowHeaderText>{props.text}</ArrowHeaderText>
                )}
            </ArrowHeaderWrapper>
        </ArrowHeaderContainer>
    )
}