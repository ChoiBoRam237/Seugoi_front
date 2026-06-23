import { useNavigate } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { IStudy } from "@/components/types/study";
import { LinkEnum } from "@/meta/link";
import { BASE_URL } from "@/util/api";
import { StudyBookmark, StudyContainer, StudyContent, StudyGradient, StudyImg, StudyText, StudyTitle } from "./indexStyles";
import { useControlStudyItem } from "./index.control";
import React from "react";

/**
 * @brief 스터디 아이템 컴포넌트
 */

interface StudyItemProps {
    item: IStudy;
    onFetch: () => void;
}

export const CommonStudyItem = (props: StudyItemProps) => {
    const navigate = useNavigate();
    const controller = useControlStudyItem(props);

    return (
        <StudyContainer onClick={() => navigate(`/${LinkEnum.STUDY}/${props.item.code}`)}>
            <StudyImg $src={`${BASE_URL}${props.item.bgImageUrl}`} />
            <StudyGradient />
            <StudyContent>
                <StudyTitle>{props.item.studyName}</StudyTitle>
                
                {props.item?.categories?.length > 0 && (
                    <StudyText>
                        {props.item?.categories?.map((category, index) => (
                            <React.Fragment key={index}>{category}&nbsp;</React.Fragment>
                        ))}
                    </StudyText>
                )}
            </StudyContent>

            {!props.item.isAdmin && (
                <StudyBookmark
                    onClick={(e) => {
                        e.stopPropagation();
                        controller.onBookmark(props.item.code);
                    }}
                >
                    {props.item.isBookmark ? (
                        <IoBookmark size={20} color="white" />
                    ) : (
                        <IoBookmarkOutline size={20} color="white" />
                    )}
                </StudyBookmark>
            )}
        </StudyContainer>
    )
}