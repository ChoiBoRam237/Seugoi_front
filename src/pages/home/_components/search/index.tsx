import React from "react";
import { useLocation } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { CommonStudyItem } from "@/components/common/study-item";
import { CommonLoading } from "@/components/common/loading";
import { StudyList } from "../../indexStyles";
import { useControlSearch } from "./index.control";
import { LatestSearch, LatestStudy, NoData, SearchContainer, SearchLatestLabel, SearchLatestLabelWrapper, SearchLatestList, SearchLatestTitle, SearchWrapper, StudyTitle } from "./indexStyles";

/**
 * @brief 스터디 검색
 */

export interface SearchProps {
    userName: string;
    keyword: string; // 검색 키워드
}

export const Search = (props: SearchProps) => {
    const location = useLocation();
    const controller = useControlSearch(props);

    return (
        <SearchContainer
            className={props.keyword !== "" ? "isKeyword" : ""}
        >
            {props.keyword === "" ? (
                <>
                    {!controller.isLoading ? (
                        <>
                            {(controller.latestStudyList.length > 0 || controller.searchKeywordList.length > 0) ? (
                                <>
                                    {controller.searchKeywordList.length > 0 && (
                                        <SearchWrapper>
                                            <SearchLatestLabelWrapper>
                                                <SearchLatestTitle>최근 검색어</SearchLatestTitle>
                                                <SearchLatestLabel onClick={controller.onDeleteKeywordAll}>전체 삭제</SearchLatestLabel>
                                            </SearchLatestLabelWrapper>

                                            <SearchLatestList className="keyword">
                                                {controller.searchKeywordList.map((search, index) => (
                                                    <LatestSearch
                                                        key={index}
                                                        onClick={() => console.log("ddddd")}
                                                    >
                                                        {search.keyword}
                                                        
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                controller.onDeleteKeyword(search.code);
                                                            }}
                                                        >
                                                            <BsX size={20} color="white" />
                                                        </button>
                                                    </LatestSearch>
                                                ))}
                                            </SearchLatestList>
                                        </SearchWrapper>
                                    )}

                                    {controller.latestStudyList.length > 0 && (
                                        <SearchWrapper>
                                            <SearchLatestTitle>최근 조회한 스터디</SearchLatestTitle>

                                            <SearchLatestList className="study">
                                                {controller.latestStudyList.map((study, index) => (
                                                    <LatestStudy key={index}>
                                                        <CommonStudyItem
                                                            item={study}
                                                            prevUrl={location.pathname}
                                                            onFetch={controller.onFetchLatestStudy}
                                                        />
                                                    </LatestStudy>
                                                ))}
                                            </SearchLatestList>
                                        </SearchWrapper>
                                    )}
                                </>
                            ) : (
                                <NoData>검색어를 입력해<br />원하는 스터디를 찾아보세요.</NoData>
                            )}
                        </>
                    ) : (
                        <CommonLoading />
                    )}
                </>
            ) : (
                <>
                    {!controller.isSearchLoading ? (
                        <>
                            {controller.searchStudyList.length > 0 ? (
                                <>
                                    <StudyTitle>{props.userName}님이 검색하신<br />스터디 {controller.searchStudyList.length}개를 찾아왔어요!</StudyTitle>

                                    <StudyList>
                                        {controller.searchStudyList.map((study, index) => (
                                            <CommonStudyItem
                                                key={index}
                                                item={study}
                                                prevUrl={location.pathname}
                                                onFetch={controller.onFetchSearchStudy}
                                            />
                                        ))}
                                    </StudyList>
                                </>
                            ) : (
                                <NoData>검색어에 일치하는<br />스터디가 존재하지 않습니다.</NoData>
                            )}
                        </>
                    ) : (
                        <CommonLoading text="검색 중..." />
                    )}
                </>
            )}
        </SearchContainer>
    )
}