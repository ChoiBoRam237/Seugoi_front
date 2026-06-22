import { MdFormatListBulleted } from "react-icons/md";
import { ListContainer, ListFilter, ListFilterContainer, ListFilterWrapper, ListNoData, ListSortContainer, ListTitle, ListTitleWrapper, ListWrap, ListWrapper } from "./indexStyles";
import { studyFilter } from "./index.constants";
import { MenuBar } from "@/components/menu";
import { useControlStudyList } from "./index.control";
import { CommonSort } from "@/components/common/sort";
import { CommonStudyItem } from "@/components/common/study-item";
import { Loading } from "@/components/loading";

/**
 * @brief 스터디 목록
 */

export const StudyList = () => {
    const controller = useControlStudyList();

    if (controller.isLoading) <Loading />;

    return (
        <>
            <ListContainer>
                <ListWrapper>
                    <ListTitleWrapper>
                        <MdFormatListBulleted size={24} color="white" />
                        <ListTitle>스터디 목록</ListTitle>
                    </ListTitleWrapper>

                    <ListFilterContainer>
                        <ListFilterWrapper>
                            {studyFilter.map((filter, index) => (
                                <ListFilter
                                    key={index}
                                    className={filter.value === controller.selectedFilter.value ? "active" : ""}
                                    onClick={() => controller.setSelectedFilter(filter)}
                                >
                                    {filter.label}
                                </ListFilter>
                            ))}
                        </ListFilterWrapper>

                        <ListSortContainer>
                            <CommonSort
                                selected={controller.selectedSort}
                                setSelected={controller.setSelectedSort}
                            />
                        </ListSortContainer>
                    </ListFilterContainer>
                </ListWrapper>

                {/* list */}
                {controller.studyList.length > 0 ? (
                    <>
                        {controller.selectedFilter.value === "ALL" ? (
                            <ListWrap>
                                {controller.studyList.map((item, index) => (
                                    <CommonStudyItem
                                        key={index}
                                        bgImageUrl={item.bgImageUrl}
                                        studyName={item.studyName}
                                        categories={item.categories}
                                        isBookmark={item.isBookmark}
                                        onClick={() => {}}
                                    />
                                ))}
                            </ListWrap>
                        ) : (
                            <></>
                        )}
                    </>
                ) : (
                    <ListNoData>스터디가 존재하지 않습니다.</ListNoData>
                )}
            </ListContainer>

            {/* 메뉴바 컴포넌트 */}
            <MenuBar />
        </>
    )
}