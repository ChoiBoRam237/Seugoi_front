import { useLocation } from "react-router-dom";
import { MdFormatListBulleted } from "react-icons/md";
import { CommonMenuBar } from "@/components/menuBar";
import { CommonSort } from "@/components/common/sort";
import { CommonStudyItem } from "@/components/common/study-item";
import { CommonLoading } from "@/components/loading";
import { CommonStudyingItem } from "@/components/common/studying-item";
import { ListContainer, ListFilter, ListFilterContainer, ListFilterWrapper, ListFlex, ListFlexItem, ListNoData, ListSortContainer, ListTitle, ListTitleWrapper, ListWrap, ListWrapper } from "./indexStyles";
import { useControlStudyList } from "./index.control";
import { studyFilter } from "./index.constants";

/**
 * @brief 스터디 목록
 */

export const StudyList = () => {
    const location = useLocation();
    const controller = useControlStudyList();

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
                {!controller.isLoading ? (
                    <>
                        {controller.studyList.length > 0 ? (
                            <>
                                {controller.selectedFilter.value === "JOINED" ? (
                                    <ListFlex>
                                        {controller.studyList.map((item, index) => (
                                            <ListFlexItem>
                                                <CommonStudyingItem
                                                    key={index}
                                                    item={item}
                                                    prevUrl={location.pathname}
                                                />
                                            </ListFlexItem>
                                        ))}
                                    </ListFlex>
                                ) : (
                                    <ListWrap>
                                        {controller.studyList.map((item, index) => (
                                            <CommonStudyItem
                                                key={index}
                                                item={item}
                                                prevUrl={location.pathname}
                                                onFetch={controller.onFetch}
                                            />
                                        ))}
                                    </ListWrap>
                                )}
                            </>
                        ) : (
                            <ListNoData>스터디가 존재하지 않습니다.</ListNoData>
                        )}
                    </>
                ) : (
                    <CommonLoading />
                )}
            </ListContainer>

            {/* 메뉴바 컴포넌트 */}
            <CommonMenuBar />
        </>
    )
}