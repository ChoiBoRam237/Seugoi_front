import React from "react";
import { format, isSameDay } from "date-fns";
import { CommonChatHeader } from "@/components/common/header/chat";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonLoading } from "@/components/common/loading";
import { CommonChatInput } from "@/components/common/chat-input";
import { useControlChatRoom } from "./index.control";
import { MyChat } from "./_components/my-chat";
import { YourChat } from "./_components/your-chat";
import { IChatMessage, IChatType } from "@/components/types/chat";
import { ChatRoomDate, ChatRoomDateWrapper, ChatRoomHr, ChatRoomList, ChatRoomMyChat, ChatRoomNoData, ChatRoomStatus, ChatRoomYourChat } from "./indexStyles";
import { ko } from "date-fns/locale";

/**
 * @brief 채팅방
 */

export interface ChatProps {
    data: IChatMessage;
    showProfile: boolean;
    showTime: boolean;
}

export const ChatRoom = () => {
    const controller = useControlChatRoom();

    return (
        <LayoutInnerWrapper className="chat">
            {controller.chatRoomInfo && (
                <CommonChatHeader
                    image={controller.chatRoomInfo.study.bgImg}
                    roomName={controller.chatRoomInfo.roomName}
                    onClick={controller.onDelete}
                />
            )}

            {!controller.isLoading ? (
                <>
                    {controller.chatMessageList.length > 0 ? (
                        <ChatRoomList ref={controller.chatContainerRef}>
                            {controller.chatMessageList.map((msg, index) => {
                                const prev = controller.chatMessageList[index - 1];
                                const next = controller.chatMessageList[index + 1];

                                // 프로필 숨기기
                                const hiddenProfile = 
                                    (prev?.user?.userCode === msg?.user?.userCode)
                                    && (format(prev.createdAt, "HH:mm") === format(msg.createdAt, "HH:mm"));

                                // 시간 숨기기
                                const hiddenTime =
                                    (next?.user?.userCode === msg?.user?.userCode)
                                    && (format(next.createdAt, "HH:mm") === format(msg.createdAt, "HH:mm"));

                                // 날짜 구분선
                                const showDate = !prev || !isSameDay(prev.createdAt, msg.createdAt);

                                return (
                                    <React.Fragment key={index}>
                                        {showDate && (
                                            <ChatRoomDateWrapper>
                                                <ChatRoomHr />
                                                <ChatRoomDate>{format(msg.createdAt, "yyyy년 MM월 dd일 EEEE", { locale: ko })}</ChatRoomDate>
                                                <ChatRoomHr />
                                            </ChatRoomDateWrapper>
                                        )}

                                        {msg.type === IChatType.CHAT ? (
                                            <>
                                                {msg.user.userCode === controller.userCode ? (
                                                    <ChatRoomMyChat>
                                                        <MyChat
                                                            data={msg}
                                                            showProfile={!hiddenProfile}
                                                            showTime={!hiddenTime}
                                                        />
                                                    </ChatRoomMyChat>
                                                ) : (
                                                    <ChatRoomYourChat>
                                                        <YourChat
                                                            data={msg}
                                                            showProfile={!hiddenProfile}
                                                            showTime={!hiddenTime}
                                                        />
                                                    </ChatRoomYourChat>
                                                )}
                                            </>
                                        ) : (
                                            <ChatRoomStatus>{msg.message}</ChatRoomStatus>
                                        )}
                                    </React.Fragment>
                                )
                            })}

                            <div ref={controller.bottomRef} />
                        </ChatRoomList>
                    ) : (
                        <ChatRoomNoData>
                            아직 대화가 시작되지 않았습니다.<br />
                            첫 번째 메시지를 보내보세요!
                        </ChatRoomNoData>
                    )}
                </>
            ) : (
                <CommonLoading />
            )}

            <CommonChatInput
                isLoading={controller.chatLoading}
                loadingText="채팅 보내는 중..."
                disabled={false}
                placeholder={"채팅 입력"}
                value={controller.message}
                setValue={controller.setMessage}
                previewImgList={controller.previewImgList}
                setPreviewImgList={controller.setPreviewImgList}
                setImageList={controller.setImgList}
                onSend={controller.onSend}
            />
        </LayoutInnerWrapper>
    )
}