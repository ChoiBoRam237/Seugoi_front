import { CommonCustomHeader } from "@/components/common/header/custom";
import { useControlChatList } from "./index.control";
import { ChatListTitle } from "./indexStyles";
import { List } from "./_components/list";
import { Search } from "./_components/search";

/**
 * @brief 채팅 목록
 */

export const ChatList = () => {
    const controller = useControlChatList();

    return (
        <>
            <CommonCustomHeader
                logo={<ChatListTitle>채팅</ChatListTitle>}
                isSearch={true}
                searching={controller.searching}
                setSearching={controller.setSearching}
                searchValue={controller.keyword}
                setSearchValue={controller.setKeyword}
            />

            {controller.searching ? (
                <Search keyword={controller.debouncedKeyword} />
            ) : (
                <List keyword={controller.debouncedKeyword} />
            )}
        </>
    )
}