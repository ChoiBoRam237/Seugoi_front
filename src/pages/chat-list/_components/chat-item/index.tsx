import { IChat } from "@/components/types/chat";
import { ChatItemContainer, ChatItemImg, ChatItemInfo, ChatItemLastMessage, ChatItemStudyName, ChatItemTime, ChatItemWrapper } from "./indexStyles";
import { format } from "date-fns";
import { BASE_URL } from "@/util/api";
import { useNavigate } from "react-router-dom";

/**
 * @brief 채팅 아이템
 */

interface Props {
    data: IChat;
}

export const ChatItem = (props: Props) => {
    const navigate = useNavigate();

    return (
        <ChatItemContainer onClick={() => navigate(`${props.data.code}`)}>
            <ChatItemWrapper>
                <ChatItemImg $src={`${BASE_URL}${props.data.study.bgImg.folderName}${props.data.study.bgImg.imgUrl}`} />

                <ChatItemInfo>
                    <ChatItemStudyName>{props.data.roomName}</ChatItemStudyName>
                    {props.data.lastMessage ? (
                        <ChatItemLastMessage>{props.data.lastMessage}</ChatItemLastMessage>
                    ) : (
                        <ChatItemLastMessage>아직 대화가 없습니다.</ChatItemLastMessage>
                    )}
                </ChatItemInfo>
            </ChatItemWrapper>

            {props.data.lastMessageDate && <ChatItemTime>{format(props.data.lastMessageDate, "HH:MM")}</ChatItemTime>}
        </ChatItemContainer>
    )
}