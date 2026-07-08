import { CommonMenuBar } from "@/components/common/menuBar";
import { ChatItem } from "../chat-item";
import { CommonChatListContainer } from "../../indexStyles";
import { ListWrapper } from "./indexStyles";
import { useControlList } from "./index.control";

/**
 * @brief 채팅 목록
 */

export const List = () => {
    const controller = useControlList();

    return (
        <>
            <CommonChatListContainer>
                <ListWrapper>
                    {controller.chatList.map((item, index) => (
                        <ChatItem
                            key={index}
                            data={item}
                        />
                    ))}
                </ListWrapper>
            </CommonChatListContainer>

            {/* 메뉴바 컴포넌트 */}
            <CommonMenuBar />
        </>
    )
}