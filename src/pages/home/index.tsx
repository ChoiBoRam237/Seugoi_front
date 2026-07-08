import { useUserInfo } from "@/hooks/useUserInfo";
import { LayoutInnerWrapper } from "@/components/layout";
import { CommonCustomHeader } from "@/components/common/header/custom";
import { HeaderLogo } from "@/components/common/header/indexStyles";
import logoImg from "@/assets/text-logo.svg";
import { Study } from "./_components/study";
import { Search } from "./_components/search";
import { HomeContainer } from "./indexStyles";
import { useControlHome } from "./index.control";

/**
 * @brief 메인화면
 */

export const Home = () => {
    const controller = useControlHome();
    const { userName } = useUserInfo();
    
    return (
        <>
            {/* 헤더 컴포넌트 */}
            <CommonCustomHeader
                logo={<HeaderLogo $src={logoImg} />}
                isSearch={true}
                searching={controller.searching}
                setSearching={controller.setSearching}
                searchValue={controller.searchValue}
                setSearchValue={controller.setSearchValue}
            />

            <LayoutInnerWrapper className="custom">
                <HomeContainer>
                    {controller.searching ? (
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
        </>
    )
}