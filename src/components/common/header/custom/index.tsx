import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { HeaderContainer } from "../indexStyles";
import { CustomHeaderContainer, CustomHeaderInput, CustomHeaderInputWrapper } from "./indexStyles";
import { useNavigate } from "react-router-dom";
import { LinkEnum } from "@/meta/link";

/**
 * @brief 커스텀 헤더 컴포넌트
 */

interface Props {
    logo: React.ReactNode;
    isSearch: boolean;
    searchIng?: boolean; // 검색중인지 아닌지
    setSearchIng?: React.Dispatch<React.SetStateAction<boolean>>;
    searchValue?: string; // 검색어
    setSearchValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const CommonCustomHeader = (props: Props) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <CustomHeaderContainer>
                {props.isSearch ? (
                    <>
                        {!props.searchIng ? (
                            <>
                                <button onClick={() => navigate(`/${LinkEnum.HOME}`)}>
                                    {props.logo}
                                </button>

                                <button onClick={() => props.setSearchIng(true)}>
                                    <RiSearchLine size={26} color="white" />
                                </button>
                            </>
                        ) : ( // 검색 중
                            <>
                                <button
                                    className="shrink-0"
                                    onClick={() => {
                                        props.setSearchIng(false);
                                        props.setSearchValue("");
                                    }}
                                >
                                    <IoIosArrowBack size={25} color="white" />
                                </button>

                                <CustomHeaderInputWrapper>
                                    <RiSearchLine size={22} color="var(--white-50)" />

                                    <CustomHeaderInput
                                        id="search-header-input"
                                        placeholder="검색어를 입력하세요"
                                        value={props.searchValue}
                                        onChange={(e) => props.setSearchValue(e.target.value)}
                                    />
                                </CustomHeaderInputWrapper>
                            </>
                        )}
                    </>
                ) : (
                    <button onClick={() => navigate(`/${LinkEnum.HOME}`)}>
                        {props.logo}
                    </button>
                )}
            </CustomHeaderContainer>
        </HeaderContainer>
    )
}