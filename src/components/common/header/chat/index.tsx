import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BASE_URL } from "@/util/api";
import { ICommonImgResponse } from "@/components/types/study";
import { LinkEnum } from "@/meta/link";
import { CommonOverflowMenu } from "../../overflow-menu";
import { HeaderContainer } from "../indexStyles";
import { ChatHeaderContainer, ChatHeaderInfoImg, ChatHeaderInfoName, ChatHeaderInfoWrapper, ChatHeaderWrapper } from "./indexStyles";
import { CommonConfirmModal } from "@/components/molecules/modal/confirm";

/**
 * @brief 채팅방 헤더 컴포넌트
 */

interface Props {
    image: ICommonImgResponse;
    roomName: string;
    onClick: () => void;
}

export const CommonChatHeader = (props: Props) => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [exitOpen, setExitOpen] = useState<boolean>(false);

    return (
        <HeaderContainer className="chat">
            <ChatHeaderContainer>
                <ChatHeaderWrapper>
                    <button onClick={() => navigate(`/${LinkEnum.CHAT}`)}>
                        <IoIosArrowBack size={25} color="white" />
                    </button>

                    <ChatHeaderInfoWrapper>
                        <ChatHeaderInfoImg $src={`${BASE_URL}${props.image.folderName}${props.image.imgUrl}`} />
                        <ChatHeaderInfoName>{props.roomName}</ChatHeaderInfoName>
                    </ChatHeaderInfoWrapper>
                </ChatHeaderWrapper>

                <div className="relative cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
                    <HiOutlineDotsHorizontal size={25} color="white" />

                    {menuOpen && (
                        <CommonOverflowMenu
                            open={menuOpen}
                            setOpen={setMenuOpen}
                            options={[
                                { text: "나가기", textColor: "var(--red)", onClick: () => setExitOpen(true) }
                            ]}
                        />
                    )}
                </div>
            </ChatHeaderContainer>

            <CommonConfirmModal
                open={exitOpen}
                setOpen={setExitOpen}
                title="채팅방을 나가시겠습니까?"
                content="기존 채팅 내용은 유지되며, 작성자 정보는 '알 수 없음'으로 변경됩니다."
                okTitle="나가기"
                onOk={props.onClick}
            />
        </HeaderContainer>
    )
}