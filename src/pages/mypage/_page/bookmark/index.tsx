import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonMenuBar } from "@/components/menuBar";
import { CommonSort } from "@/components/common/sort";
import { CommonStudyItem } from "@/components/common/study-item";
import { CommonLoading } from "@/components/loading";
import { LinkEnum } from "@/meta/link";
import { BookmarkHeader, BookmarkSort, BookmarkStudyContainer, BookmarkStudyList, BookmarkTitle, BookmarkTitleContainer, BookmarkTitleWrapper, NoData } from "./indexStyles";
import { useControlMypageBookmarkStudy } from "./index.control";

/**
 * @brief 찜한 스터디
 */

export const MypageBookmarkStudy = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const controller = useControlMypageBookmarkStudy();

    return (
        <LayoutInnerWrapper>
            <BookmarkHeader>
                <BookmarkTitleContainer>
                    <button onClick={() => navigate(`/${LinkEnum.MYPAGE}`)}>
                        <IoIosArrowBack size={25} color="white" />
                    </button>

                    <BookmarkTitleWrapper>
                        <IoBookmark size={22} color="white" />
                        <BookmarkTitle>찜한 스터디</BookmarkTitle>
                    </BookmarkTitleWrapper>
                </BookmarkTitleContainer>

                <BookmarkSort>
                    <CommonSort
                        selected={controller.selectedSort}
                        setSelected={controller.setSelectedSort}
                    />
                </BookmarkSort>
            </BookmarkHeader>

            <BookmarkStudyContainer>
                {!controller.isLoading ? (
                    <>
                        {controller.bookmarkList.length > 0 ? (
                            <BookmarkStudyList>
                                {controller.bookmarkList.map((item, index) => (
                                    <CommonStudyItem
                                        key={index}
                                        item={item}
                                        prevUrl={location.pathname}
                                        onFetch={() => {}}
                                    />
                                ))}
                            </BookmarkStudyList>
                        ) : (
                            <NoData>찜한 스터디가<br />존재하지 않습니다.</NoData>
                        )}
                    </>
                ) : (
                    <CommonLoading />
                )}
            </BookmarkStudyContainer>

            <CommonMenuBar />
        </LayoutInnerWrapper>
    )
}