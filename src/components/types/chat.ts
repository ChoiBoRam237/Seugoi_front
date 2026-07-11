import { IStudy } from "./study";
import { IUser } from "./user";

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

export interface IChatMessage {
    code: number;
    user: IUser; // 메시지 보낸 사용자 정보
    senderName: string; // 보낸 사람 이름
    senderProfileImgUrl: string; // 보낸 사람 프로필 이미지
    type: IChatType;
    message: string; // 메시지
    imgList: string[]; // 이미지 리스트
    owner: boolean; // 스터디 관리자인지 아닌지
    createdAt: Date;
}

export enum IChatType {
    CHAT = "CHAT",
    JOIN = "JOIN",
    LEAVE = "LEAVE"
}