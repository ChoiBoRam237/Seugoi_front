import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Menu } from "@/components/menu";
import { cookie } from "@/util/cookies";
import { SearchHeader } from "@/components/common/search-header";
import { LayoutInnerWrapper } from '@/components/layout';
import { StudyingItem } from '@/components/common/studying-item';
import { HomeContainer, HomeLogo, HomePopularList, HomePopularTitle, HomePopularTitleWrapper, HomePopularWrapper, HomeStudyingInnerWrapper, HomeStudyingItem, HomeStudyingSwiper, HomeStudyingTitle, HomeStudyingWrapper, HomeTodayPhrase, HomeTodayPhraseContent, HomeTodayPhraseLine, HomeTodayPhraseTitle } from "./indexStyles";
import { useControlHome } from "./index.control";
import logoImg from "@/assets/text-logo.svg";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { StudyItem } from '@/components/common/study-item';

/**
 * @brief 메인화면
 */

export const Home = () => {
    const controller = useControlHome();
    const userName = JSON.parse(cookie.getCookie("user")).name;
    
    return (
        <>
            {/* 검색 헤더 컴포넌트 */}
            <SearchHeader
                logo={<HomeLogo $src={logoImg} />}
                searchIng={controller.searchIng}
                setSearchIng={controller.setSearchIng}
                searchValue={controller.searchValue}
                setSearchValue={controller.setSearchValue}
            />

            <LayoutInnerWrapper>
                <HomeContainer>
                    {/* 현재 진행중인 스터디 */}
                    <HomeStudyingWrapper>
                        <HomeStudyingTitle>{userName}님이<br />현재 진행중인 스터디</HomeStudyingTitle>

                        <HomeStudyingInnerWrapper>
                            <HomeStudyingSwiper
                                slidesPerView={1.15} // 다음 카드가 살짝 보임
                                spaceBetween={16}
                                centeredSlides={false}
                            >
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <HomeStudyingItem>
                                            <StudyingItem />
                                        </HomeStudyingItem>
                                    </SwiperSlide>
                                ))}
                            </HomeStudyingSwiper>

                            <HomeTodayPhrase>
                                <HomeTodayPhraseTitle>오늘의 명언</HomeTodayPhraseTitle>
                                <HomeTodayPhraseLine />
                                <HomeTodayPhraseContent>내용</HomeTodayPhraseContent>
                            </HomeTodayPhrase>
                        </HomeStudyingInnerWrapper>
                    </HomeStudyingWrapper>

                    {/* 요즘 뜨고있는 스터디 */}
                    <HomePopularWrapper>
                        <HomePopularTitleWrapper>
                            <BiSolidBarChartAlt2 size={20} color='white' />
                            <HomePopularTitle>요즘 뜨고있는</HomePopularTitle>
                        </HomePopularTitleWrapper>
                        
                        <HomePopularList>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <StudyItem key={index} />
                            ))}
                        </HomePopularList>
                    </HomePopularWrapper>
                </HomeContainer>
            </LayoutInnerWrapper>

            {/* 메뉴바 컴포넌트 */}
            <Menu />
        </>
    )
}