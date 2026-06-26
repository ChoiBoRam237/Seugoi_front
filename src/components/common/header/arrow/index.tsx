import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HeaderContainer } from "../indexStyles";
import { ArrowHeaderText, ArrowHeaderWrapper } from "./indexStyles";

/**
 * @brief 화살표 헤더 컴포넌트
 */

interface Props {
    moveUrl: string;
    text?: string;
}

export const CommonArrowHeader = (props: Props) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <ArrowHeaderWrapper>
                <button onClick={() => navigate(props.moveUrl, { replace: true })}>
                    <IoIosArrowBack size={25} color="white" />
                </button>

                {props.text && (
                    <ArrowHeaderText>{props.text}</ArrowHeaderText>
                )}
            </ArrowHeaderWrapper>
        </HeaderContainer>
    )
}