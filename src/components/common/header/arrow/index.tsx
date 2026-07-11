import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CommonOverflowMenu } from "../../overflow-menu";
import { HeaderContainer } from "../indexStyles";
import { ArrowHeaderText, ArrowHeaderWrapper } from "./indexStyles";

/**
 * @brief 화살표 헤더 컴포넌트
 */

interface Props {
    moveUrl: string;
    urlState?: Record<string, any>;
    text?: string;
    options?: {
        text: string;
        textColor: string;
        onClick: () => void;
    }[];
}

export const CommonArrowHeader = (props: Props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <HeaderContainer className="arrow">
            <ArrowHeaderWrapper>
                <button onClick={() => navigate(props.moveUrl, { replace: true, state: props.urlState })}>
                    <IoIosArrowBack size={25} color="white" />
                </button>

                {props.text && (
                    <ArrowHeaderText>{props.text}</ArrowHeaderText>
                )}

                {props.options?.length > 0 && (
                    <div className="relative cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
                        <HiOutlineDotsHorizontal size={25} color="white" />

                        {menuOpen && (
                            <CommonOverflowMenu
                                open={menuOpen}
                                setOpen={setMenuOpen}
                                options={props.options}
                            />
                        )}
                    </div>
                )}
            </ArrowHeaderWrapper>
        </HeaderContainer>
    )
}