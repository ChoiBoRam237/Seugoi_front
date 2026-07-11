import { ICommonImgResponse } from "./study";

/**
 * @brief 과제 관련 타입
 */

export interface IAsgmtComment {
    submitted: boolean;
    comments: IAsgmtCommentItem[];
};

export interface IAsgmtCommentItem {
    code: number;
    comment: string;
    imgList: ICommonImgResponse[];
    writerOwner: boolean;
    isAdminCheck: boolean;
    createdAt: Date;
    user: {
        code: number;
        name: string;
        profileImgUrl: string;
    }
};