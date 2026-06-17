import { TiHome } from "react-icons/ti";
import { RiBook2Fill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { MenuContainer, MenuInnerWrapper, MenuPlusButton, MenuWrapper } from "./indexStyles";
import { useControlMenu } from "./index.control";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 푸터 컴포넌트
 */

export const Menu = () => {
    const controller = useControlMenu();

    return (
        <MenuContainer>
            <MenuWrapper>
                <MenuInnerWrapper>
                    <button onClick={() => controller.onClick(`/${LinkEnum.HOME}`)}>
                        <TiHome size={25} color={controller.getBgColor(`/${LinkEnum.HOME}`)} />
                    </button>

                    <button onClick={() => controller.onClick(`/${LinkEnum.STUDY}/${LinkEnum.LIST}`)}>
                        <RiBook2Fill size={25} color={controller.getBgColor(`/${LinkEnum.STUDY}/${LinkEnum.LIST}`)} />
                    </button>
                </MenuInnerWrapper>

                <MenuPlusButton onClick={() => controller.onClick(`/${LinkEnum.STUDY}/${LinkEnum.GENERATE}`)}>
                    <FiPlus size={35} color="white" />
                </MenuPlusButton>
                
                <MenuInnerWrapper>
                    <button onClick={() => controller.onClick(`/${LinkEnum.CHAT}`)}>
                        <TbMessageCircleFilled size={25} color={controller.getBgColor(`/${LinkEnum.CHAT}`)} />
                    </button>

                    <button onClick={() => controller.onClick(`/${LinkEnum.MYPAGE}`)}>
                        <IoPerson size={25} color={controller.getBgColor(`/${LinkEnum.MYPAGE}`)} />
                    </button>
                </MenuInnerWrapper> 
            </MenuWrapper>
        </MenuContainer>
    )
}