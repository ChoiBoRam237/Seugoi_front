import { cookie } from "@/util/cookies";
import { LayoutInnerWrapper } from "@/components/layout";
import { MenuBar } from "@/components/menu";
import { CommonSearchHeader } from "@/components/common/header/search";
import { HomeContainer, HomeLogo } from "./indexStyles";
import { useControlHome } from "./index.control";
import logoImg from "@/assets/text-logo.svg";
import { Study } from "./_components/study";
import { Search } from "./_components/search";

/**
 * @brief 메인화면
 */

export const Home = () => {
    const controller = useControlHome();
    const userName = cookie.getCookie("user").name;
    
    return (
        <>
            {/* 검색 헤더 컴포넌트 */}
            <CommonSearchHeader
                logo={<HomeLogo $src={logoImg} />}
                searchIng={controller.searchIng}
                setSearchIng={controller.setSearchIng}
                searchValue={controller.searchValue}
                setSearchValue={controller.setSearchValue}
            />

            <LayoutInnerWrapper>
                <HomeContainer>
                    {controller.searchIng ? (
                        <Search
                            userName={userName}
                            keyword={controller.debouncedKeyword}
                            setKeyword={controller.setSearchValue}
                        />
                    ) : (
                        <Study userName={userName} />
                    )}
                </HomeContainer>
            </LayoutInnerWrapper>

            {/* 메뉴바 컴포넌트 */}
            <MenuBar />
        </>
    )
}