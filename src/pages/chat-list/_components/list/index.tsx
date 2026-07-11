import { CommonMenuBar } from "@/components/common/menuBar";
import { CommonLoading } from "@/components/common/loading";
import { useChatRoomList } from "@/hooks/_api/useChatRoomList";
import { ChatItem } from "../chat-item";
import { CommonChatListContainer, CommonNoData } from "../../indexStyles";
import { ListWrapper } from "./indexStyles";

/**
 * @brief 채팅 목록
 */

interface Props {
    keyword: string;
}

export const List = (props: Props) => {
    const { 
        chatRoomLoading, 
        chatRoomList,
    } = useChatRoomList({ keyword: props.keyword, enabled: props.keyword === "" });

    return (
        <>
            <CommonChatListContainer>
                <ListWrapper>
                    {!chatRoomLoading ? (
                        <>
                            {chatRoomList.length > 0 ? (
                                <>
                                    {chatRoomList.map((item, index) => (
                                        <ChatItem
                                            key={index}
                                            data={item}
                                        />
                                    ))}
                                </>
                            ) : (
                                <CommonNoData>
                                    참여 중인 채팅방이 없습니다. <br />
                                    스터디에 가입하고 다른 멤버들과<br />대화를 시작해 보세요.
                                </CommonNoData>
                            )}
                        </>
                    ) : (
                        <CommonLoading />
                    )}
                </ListWrapper>
            </CommonChatListContainer>

            {/* 메뉴바 컴포넌트 */}
            <CommonMenuBar />
        </>
    )
}