import { useLocation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "motion/react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CommonStudyItem } from "@/components/common/study-item";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CommonLoading } from "@/components/common/loading";
import { CommonStudyingItem } from "@/components/common/studying-item";
import { CommonMenuBar } from "@/components/common/menuBar";
import { StudyList } from "../../indexStyles";
import { StudyPopularContainer, StudyPopularTitle, StudyPopularTitleWrapper, StudyingInnerWrapper, StudyingItem, StudyingSwiper, StudyingTitle, StudyingWrapper, StudyTodayPhraseContent, StudyTodayPhraseLine, StudyTodayPhraseTitle, StudyContainer, StudyTodayPhraseContainer, StudyTodayPhraseWrapper, StudyingNoData, StudyPopularNoData } from "./indexStyles";
import { useControlStudy } from "./index.control";

/**
 * @brief 스터디
 */

interface Props {
    userName: string;
}

export const Study = (props: Props) => {
    const location = useLocation();
    const windowSize = useWindowSize();
    const controller = useControlStudy();

    return (
        <>
            {!controller.isLoading ? (
                <StudyContainer>
                    {/* 현재 진행중인 스터디 */}
                    <StudyingWrapper>
                        <StudyingTitle>{props.userName}님이<br />현재 진행중인 스터디</StudyingTitle>
        
                        <StudyingInnerWrapper>
                            {controller.studyingList.length > 0 ? (
                                <StudyingSwiper
                                    slidesPerView={1.15} // 다음 카드가 살짝 보임
                                    spaceBetween={16}
                                    centeredSlides={false}
                                >
                                    {controller.studyingList.map((study, index) => (
                                        <SwiperSlide key={index}>
                                            <StudyingItem>
                                                <CommonStudyingItem
                                                    item={study}
                                                    prevUrl={location.pathname}
                                                />
                                            </StudyingItem>
                                        </SwiperSlide>
                                    ))}
                                </StudyingSwiper>
                            ) : (
                                <StudyingNoData>
                                    현재 진행 중인 스터디가<br />
                                    존재하지 않습니다.
                                </StudyingNoData>
                            )}
        
                            {controller.todayQuote && (
                                <StudyTodayPhraseContainer>
                                    <StudyTodayPhraseTitle>오늘의 명언</StudyTodayPhraseTitle>
                                    <StudyTodayPhraseLine />
        
                                    <StudyTodayPhraseWrapper>
                                        <motion.div
                                            animate={
                                                windowSize.width > 767
                                                    ? { x: "0%" }
                                                    : { x: ["0%", "-50%"] }
                                            }
                                            transition={
                                                windowSize.width > 767
                                                    ? undefined
                                                    : {
                                                        duration: 12,
                                                        repeat: Infinity,
                                                        repeatType: "loop",
                                                        ease: "linear",
                                                    }
                                            }
                                            style={{
                                                display: "flex",
                                                width: "max-content",
                                                whiteSpace: "nowrap"
                                            }}
                                        >
                                            {[...Array(windowSize.width > 767 ? 1 : 2)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center quote"
                                                >
                                                    <StudyTodayPhraseContent>
                                                        {controller.todayQuote?.quote}
                                                    </StudyTodayPhraseContent>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </StudyTodayPhraseWrapper>
                                </StudyTodayPhraseContainer>
                            )}
                        </StudyingInnerWrapper>
                    </StudyingWrapper>
        
                    {/* 요즘 뜨고있는 스터디 */}
                    <StudyPopularContainer>
                        <StudyPopularTitleWrapper>
                            <BiSolidBarChartAlt2 size={20} color="white" />
                            <StudyPopularTitle>요즘 뜨고있는</StudyPopularTitle>
                        </StudyPopularTitleWrapper>
        
                        {controller.trendStudyList.length > 0 ? (
                            <StudyList>
                                {controller.trendStudyList.map((item, index) => (
                                    <CommonStudyItem
                                        key={index}
                                        item={item}
                                        prevUrl={location.pathname}
                                        onFetch={controller.onTrendStudyFetch}
                                    />
                                ))}
                            </StudyList>
                        ) : (
                            <StudyPopularNoData>
                                요즘 뜨고있는 스터디가<br />
                                존재하지 않습니다.
                            </StudyPopularNoData>
                        )}
                    </StudyPopularContainer>
                </StudyContainer>
            ) : (
                <CommonLoading />
            )}

            {/* 메뉴바 컴포넌트 */}
            <CommonMenuBar />
        </>
    )
}