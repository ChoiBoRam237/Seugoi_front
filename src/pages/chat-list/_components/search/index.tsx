import { useChatRoomList } from "@/hooks/_api/useChatRoomList";
import { CommonLoading } from "@/components/common/loading";
import { CommonChatListContainer, CommonNoData } from "../../indexStyles";
import { ChatItem } from "../chat-item";
import { SearchList } from "./indexStyles";

/**
 * @brief 채팅 목록 검색
 */

export interface SearchProps {
    keyword: string;
}

export const Search = (props: SearchProps) => {
    const { 
        chatRoomLoading, 
        chatRoomList,
    } = useChatRoomList({ keyword: props.keyword });

    return (
        <CommonChatListContainer>
            <SearchList>
                {!chatRoomLoading ? (
                    <>
                        {chatRoomList.length > 0 ? (
                            <>
                                {chatRoomList.map((chat, index) => (
                                    <ChatItem
                                        key={index}
                                        data={chat}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                {props.keyword !== "" ? (
                                    <CommonNoData>검색 결과가 없습니다.</CommonNoData>
                                ) : (
                                    <CommonNoData>
                                        참여 중인 채팅방이 없습니다. <br />
                                        스터디에 가입하고 다른 멤버들과 대화를 시작해 보세요.
                                    </CommonNoData>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <CommonLoading />
                )}
            </SearchList>
        </CommonChatListContainer>
    )
}