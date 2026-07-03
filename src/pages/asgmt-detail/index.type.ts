import { ICommonImgResponse } from "@/components/types/study";

/**
 * @brief 과제 상세 타입
 */

export interface IAsgmtComment {
    submitted: boolean;
    comments: IAsgmtCommentItem[];
};

export interface IAsgmtCommentItem {
    code: number;
    comment: string;
    imgList: ICommonImgResponse[];
    isWriter: boolean;
    createdAt: Date;
    user: {
        code: number;
        name: string;
        profileImgUrl: string;
    }
};