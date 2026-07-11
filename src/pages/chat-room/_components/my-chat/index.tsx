import { PiCrownSimpleFill } from "react-icons/pi";
import { format } from "date-fns";
import { CommonChatBubble, CommonChatBubbleInnerWrapper, CommonChatBubbleWrapper, CommonChatContainer, CommonChatEmptyProfile, CommonChatImg, CommonChatImgWrapper, CommonChatName, CommonChatNameWrapper, CommonChatProfile, CommonChatTime, CommonChatWrapper } from "../../indexStyles";
import { ChatProps } from "../..";
import { BASE_URL } from "@/util/api";

/**
 * @brief 내가 보낸 채팅
 */

export const MyChat = (props: ChatProps) => {
    return (
        <CommonChatContainer className={props.showProfile ? "" : "my hiddenProfile"}>
            <CommonChatWrapper className="my">
                {props.showProfile && (
                    <CommonChatNameWrapper>
                        <CommonChatName>{props.data.senderName}</CommonChatName>
                        {props.data.owner && <PiCrownSimpleFill size={16} color="white" />}
                    </CommonChatNameWrapper>
                )}

                <CommonChatBubbleWrapper>
                    {props.showTime && <CommonChatTime>{format(props.data.createdAt, "aa K:mm")}</CommonChatTime>}

                    <CommonChatBubbleInnerWrapper>
                        <CommonChatBubble className="my">{props.data.message}</CommonChatBubble>

                        {props.data.imgList.length > 0 && (
                            <CommonChatImgWrapper className="my">
                                {props.data.imgList.map((img, index) => (
                                    <CommonChatImg
                                        key={index}
                                        $src={`${BASE_URL}${img}`}
                                    />
                                ))}
                            </CommonChatImgWrapper>
                        )}
                    </CommonChatBubbleInnerWrapper>
                </CommonChatBubbleWrapper>
            </CommonChatWrapper>

            {props.showProfile && (
                <>
                    {props.data.senderProfileImgUrl ? (
                        <CommonChatProfile $src={props.data.senderProfileImgUrl} />
                    ) : (
                        <CommonChatEmptyProfile />
                    )}
                </>
            )}
        </CommonChatContainer>
    )
}