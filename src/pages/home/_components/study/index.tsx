import { useLocation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "motion/react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { CommonStudyItem } from "@/components/common/study-item";
import { StudyList } from "../../indexStyles";
import { StudyPopularContainer, StudyPopularTitle, StudyPopularTitleWrapper, StudyingInnerWrapper, StudyingItem, StudyingSwiper, StudyingTitle, StudyingWrapper, StudyTodayPhrase, StudyTodayPhraseContent, StudyTodayPhraseLine, StudyTodayPhraseTitle, StudyContainer } from "./indexStyles";
import { useControlStudy } from "./index.control";
import { useWindowSize } from "@/hooks/useWindowSize";
import { CommonLoading } from "@/components/common/loading";

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
        
                            {controller.todayQuote && (
                                <StudyTodayPhrase>
                                    <StudyTodayPhraseTitle>오늘의 명언</StudyTodayPhraseTitle>
                                    <StudyTodayPhraseLine />
        
                                    <div className="overflow-hidden">
                                        <motion.div
                                            animate={
                                                windowSize.width > 376
                                                    ? { x: "0%" }
                                                    : { x: ["0%", "-50%"] }
                                            }
                                            transition={
                                                windowSize.width > 376
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
                                            {[...Array(windowSize.width > 376 ? 1 : 2)].map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center pr-20"
                                                >
                                                    <StudyTodayPhraseContent>
                                                        {controller.todayQuote.quote}
                                                    </StudyTodayPhraseContent>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </StudyTodayPhrase>
                            )}
                        </StudyingInnerWrapper>
                    </StudyingWrapper>
        
                    {/* 요즘 뜨고있는 스터디 */}
                    <StudyPopularContainer>
                        <StudyPopularTitleWrapper>
                            <BiSolidBarChartAlt2 size={20} color="white" />
                            <StudyPopularTitle>요즘 뜨고있는</StudyPopularTitle>
                        </StudyPopularTitleWrapper>
        
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
                    </StudyPopularContainer>
                </StudyContainer>
            ) : (
                <CommonLoading />
            )}
        </>
    )
}