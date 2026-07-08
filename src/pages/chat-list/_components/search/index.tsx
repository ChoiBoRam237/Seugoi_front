import { CommonChatListContainer } from "../../indexStyles";
import { ChatItem } from "../chat-item";
import { SearchList } from "./indexStyles";

/**
 * @brief 채팅 목록 검색
 */

export const Search = () => {
    return (
        <CommonChatListContainer>
            <SearchList>
                {/* <ChatItem />
                <ChatItem /> */}
            </SearchList>
        </CommonChatListContainer>
    )
}