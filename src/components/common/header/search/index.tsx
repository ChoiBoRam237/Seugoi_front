import React from "react";
import { SearchHeaderContainer, SearchHeaderInput, SearchHeaderInputWrapper } from "./indexStyles";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

/**
 * @brief 검색 헤더 컴포넌트
 */

interface Props {
    logo: React.ReactNode;
    searchIng: boolean; // 검색중인지 아닌지
    setSearchIng: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue: string; // 검색어
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CommonSearchHeader = (props: Props) => {
    return (
        <SearchHeaderContainer>
            {!props.searchIng ? (
                <>
                    {props.logo}

                    <button onClick={() => props.setSearchIng(true)}>
                        <RiSearchLine size={26} color="white" />
                    </button>
                </>
            ) : ( // 검색 중
                <>
                    <button
                        className="flex-shrink-0"
                        onClick={() => {
                            props.setSearchIng(false);
                            props.setSearchValue('');
                        }}
                    >
                        <IoIosArrowBack size={25} color="white" />
                    </button>

                    <SearchHeaderInputWrapper>
                        <RiSearchLine size={22} color="var(--white-50)" />

                        <SearchHeaderInput
                            id="search-header-input"
                            placeholder="검색어를 입력하세요"
                            value={props.searchValue}
                            onChange={(e) => props.setSearchValue(e.target.value)}
                        />
                    </SearchHeaderInputWrapper>
                </>
            )}
        </SearchHeaderContainer>
    )
}