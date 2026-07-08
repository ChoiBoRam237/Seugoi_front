import { IStudy } from "./study";

/**
 * @brief 채팅 관련 타입
 */

export interface IChat {
    code: number;
    roomName: string; // 채팅방 이름
    study: IStudy;
    lastMessage: string; // 마지막 메시지
    lastMessageDate: Date; // 마지막 메시지 시간
}