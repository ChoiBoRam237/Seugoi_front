import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IChat, IChatMessage } from "@/components/types/chat";
import { useWebSocket } from "@/hooks/useWebSocket";
import { getChatRoomApi } from "./_api/GET";
import { postChatRoomApi } from "./_api/POST";
import { useUserInfo } from "@/hooks/useUserInfo";
import { deleteChatRoomApi } from "./_api/DELETE";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 채팅방 컨트롤
 */

export const useControlChatRoom = () => {
    const navigate = useNavigate();
    const params = useParams();
    const client = useWebSocket();
    const { userCode } = useUserInfo();
    const [chatRoomInfo, setChatRoomInfo] = useState<IChat>(); // 채팅방 정보
    const [chatMessageList, setChatMessageList] = useState<IChatMessage[]>([]); // 채팅 메시지
    const [message, setMessage] = useState<string>(""); // 보낼 메시지
    const [imgList, setImgList] = useState<File[]>([]); // 보낼 이미지 파일
    const [previewImgList, setPreviewImgList] = useState<string[]>([]); // 이미지 미리보기

    const [chatLoading, setChatLoading] = useState<boolean>(false); // 채팅 보내는 로딩

    const bottomRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    
    // 특정 채팅방 조회 api
    const {
        data: chatRoomData,
        isLoading: chatRoomLoading,
        isFetching: chatRoomFetching,
    } = useQuery({
        queryKey: ["chatRoomInfo", params.chatRoomCode],
        queryFn: () => getChatRoomApi.getChatRoom(Number(params.chatRoomCode!)),
        enabled: !!params.chatRoomCode,
    });

    // 이전 채팅 내용 조회 api
    const getChatMessages = useMutation({
        mutationFn: () => getChatRoomApi.getChatMessages(Number(params.chatRoomCode!)),
        onSuccess: (data) => {
            setChatMessageList(data);

            requestAnimationFrame(() => {
                scrollBottom();
            });
        },
        onError: (error: AxiosError) => {
            console.error("이전 채팅 내용 조회 에러 : ", error);
        }
    });

    // 채팅 이미지 파일 저장 api
    const postSaveImg = useMutation({
        mutationFn: () => {
            setChatLoading(true);
            const formData = new FormData;
            imgList.forEach(img => formData.append("imgList", img));
            return postChatRoomApi.postChatRoomSaveImg(formData);
        },
        onSuccess: (data) => {
            // 메시지 전송 호출
            client.getClient()?.publish({
                destination: `/pub/send/${params.chatRoomCode}`,
                body: JSON.stringify({
                    userCode,
                    message,
                    imgList: data,
                }),
            });
            setMessage("");
            setImgList([]);
            setPreviewImgList([]);
            setChatLoading(false);
        },
        onError: (error: AxiosError) => {
            console.error("채팅 이미지 파일 저장 에러 : ", error);
        }
    });

    // 채팅방 탈퇴 api
    const deleteChatRoom = useMutation({
        mutationFn: () => deleteChatRoomApi.deleteChatRoom(Number(params.chatRoomCode!)),
        onSuccess: () => {
            navigate(`/${LinkEnum.CHAT}`);
        },
        onError: (error: AxiosError) => {
            console.error("채팅방 탈퇴 에러 : ", error);
        }
    });

    const onSend = () => {
        postSaveImg.mutate(); // 이미지 저장 api 호출
    }

    const onDelete = () => {
        deleteChatRoom.mutate();
    }

    // 메시지 보내면 화면 맨 아래로 스크롤
    const scrollBottom = () => {
        const container = bottomRef.current;
      
        if (container) {
            bottomRef.current?.scrollIntoView({ behavior: "instant" });
        }
    }

    const isAtBottom = () => {
        const container = chatContainerRef.current;
    
        if (!container) return false;
    
        return (
            container.scrollHeight -
            container.scrollTop -
            container.clientHeight < 50
        );
    };
    
    useEffect(() => {
        if (chatRoomData) setChatRoomInfo(chatRoomData);
    }, [chatRoomData]);

    useEffect(() => {
        getChatMessages.mutate();

        // socket 연결
        client.connect(() => {
            client.getClient()?.subscribe(`/sub/room/${params.chatRoomCode}`, (msg) => {
                const chat = JSON.parse(msg.body);
                setChatMessageList(prev => [...prev, chat]);

                // 내가 보낸 메시지일 때만 실행
                const shouldScroll = isAtBottom();
                if (chat.user.userCode === userCode) {
                    if (shouldScroll) {
                        requestAnimationFrame(() => {
                            scrollBottom();
                        });
                    }
                }
            });
        });

        return () => client.disconnect();
    }, []);

    return {
        userCode,
        isLoading: chatRoomLoading || chatRoomFetching || getChatMessages.isPending,
        chatLoading,
        chatRoomInfo, chatMessageList,
        message, setMessage,
        imgList, setImgList,
        previewImgList, setPreviewImgList,
        onSend, onDelete,

        bottomRef, chatContainerRef,
    }
}