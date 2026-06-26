import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CommonSort } from "@/components/common/sort";
import { StudyList } from "../../indexStyles";
import { StudyPopularContainer, StudyPopularTitle, StudyPopularTitleWrapper, StudyPopularWrapper, StudyingInnerWrapper, StudyingItem, StudyingSwiper, StudyingTitle, StudyingWrapper, StudyTodayPhrase, StudyTodayPhraseContent, StudyTodayPhraseLine, StudyTodayPhraseTitle, StudyContainer } from "./indexStyles";
import { useControlStudy } from "./index.control";

/**
 * @brief 스터디
 */

interface Props {
    userName: string;
}

export const Study = (props: Props) => {
    const controller = useControlStudy();

    return (
        <StudyContainer>
            {/* 현재 진행중인 스터디 */}
            <StudyingWrapper>
                <StudyingTitle>{props.userName}님이<br />현재 진행중인 스터디</StudyingTitle>

                <StudyingInnerWrapper>
                    <StudyingSwiper
                        slidesPerView={1.15} // 다음 카드가 살짝 보임
                        spaceBetween={16}
                        centeredSlides={false}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SwiperSlide key={index}>
                                <StudyingItem>
                                    {/* <CommonStudyingItem /> */}
                                </StudyingItem>
                            </SwiperSlide>
                        ))}
                    </StudyingSwiper>

                    <StudyTodayPhrase>
                        <StudyTodayPhraseTitle>오늘의 명언</StudyTodayPhraseTitle>
                        <StudyTodayPhraseLine />
                        <StudyTodayPhraseContent>내용</StudyTodayPhraseContent>
                    </StudyTodayPhrase>
                </StudyingInnerWrapper>
            </StudyingWrapper>

            {/* 요즘 뜨고있는 스터디 */}
            <StudyPopularContainer>
                <StudyPopularWrapper>
                    <StudyPopularTitleWrapper>
                        <BiSolidBarChartAlt2 size={20} color="white" />
                        <StudyPopularTitle>요즘 뜨고있는</StudyPopularTitle>
                    </StudyPopularTitleWrapper>

                    <CommonSort
                        selected={controller.selectedSort}
                        setSelected={controller.setSelectedSort}
                    />    
                </StudyPopularWrapper>

                <StudyList>
                    {/* {Array.from({ length: 4 }).map((_, index) => (
                        <CommonStudyItem
                            key={index}
                            item={}
                        />
                    ))} */}
                </StudyList>
            </StudyPopularContainer>
        </StudyContainer>
    )
}