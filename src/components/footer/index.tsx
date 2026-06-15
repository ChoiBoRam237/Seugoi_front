import { TiHome } from "react-icons/ti";
import { RiBook2Fill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { FooterContainer, FooterInnerWrapper, FooterPlusButton, FooterWrapper } from "./indexStyles";
import { useControlFooter } from "./index.control";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 푸터 컴포넌트
 */

export const Footer = () => {
    const controller = useControlFooter();

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterInnerWrapper>
                    <button onClick={() => controller.onClick(`/${LinkEnum.HOME}`)}>
                        <TiHome size={25} color={controller.getBgColor(`/${LinkEnum.HOME}`)} />
                    </button>

                    <button onClick={() => controller.onClick(`/${LinkEnum.STUDY}`)}>
                        <RiBook2Fill size={25} color={controller.getBgColor(`/${LinkEnum.STUDY}`)} />
                    </button>
                </FooterInnerWrapper>

                <FooterPlusButton onClick={() => controller.onClick(`/${LinkEnum.ADDSTUDY}`)}>
                    <FiPlus size={35} color="white" />
                </FooterPlusButton>
                
                <FooterInnerWrapper>
                    <button onClick={() => controller.onClick(`/${LinkEnum.CHAT}`)}>
                        <TbMessageCircleFilled size={25} color={controller.getBgColor(`/${LinkEnum.CHAT}`)} />
                    </button>

                    <button onClick={() => controller.onClick(`/${LinkEnum.MYPAGE}`)}>
                        <IoPerson size={25} color={controller.getBgColor(`/${LinkEnum.MYPAGE}`)} />
                    </button>
                </FooterInnerWrapper> 
            </FooterWrapper>
        </FooterContainer>
    )
}