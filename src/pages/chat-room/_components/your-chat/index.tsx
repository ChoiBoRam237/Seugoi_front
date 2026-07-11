import { PiCrownSimpleFill } from "react-icons/pi";
import { format } from "date-fns";
import { ChatProps } from "../..";
import { CommonChatBubble, CommonChatBubbleInnerWrapper, CommonChatBubbleWrapper, CommonChatContainer, CommonChatEmptyProfile, CommonChatImg, CommonChatImgWrapper, CommonChatName, CommonChatNameWrapper, CommonChatProfile, CommonChatTime, CommonChatWrapper } from "../../indexStyles";
import { BASE_URL } from "@/util/api";

/**
 * @brief 상대방이 보낸 채팅
 */

export const YourChat = (props: ChatProps) => {
    return (
        <CommonChatContainer className={props.showProfile ? "" : "your hiddenProfile"}>
            {props.showProfile && (
                <>
                    {props.data.senderProfileImgUrl ? (
                        <CommonChatProfile $src={props.data.senderProfileImgUrl} />
                    ) : (
                        <CommonChatEmptyProfile />
                    )}
                </>
            )}

            <CommonChatWrapper className="your">
                {props.showProfile && (
                    <CommonChatNameWrapper>
                        <CommonChatName>{props.data.senderName}</CommonChatName>
                        {props.data.owner && <PiCrownSimpleFill size={16} color="white" />}
                    </CommonChatNameWrapper>
                )}

                <CommonChatBubbleWrapper>
                    <CommonChatBubbleInnerWrapper>
                        <CommonChatBubble className="your">{props.data.message}</CommonChatBubble>

                        {props.data.imgList.length > 0 && (
                            <CommonChatImgWrapper className="your">
                                {props.data.imgList.map((img, index) => (
                                    <CommonChatImg
                                        key={index}
                                        $src={`${BASE_URL}${img}`}
                                    />
                                ))}
                            </CommonChatImgWrapper>
                        )}
                    </CommonChatBubbleInnerWrapper>
                    
                    {props.showTime && <CommonChatTime>{format(props.data.createdAt, "aa K:mm")}</CommonChatTime>}
                </CommonChatBubbleWrapper>
            </CommonChatWrapper>
        </CommonChatContainer>
    )
}